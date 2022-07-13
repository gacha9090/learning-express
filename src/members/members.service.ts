import { EbridgeMember, EbridgeType } from "./members.model";
import { Request, Response } from "express";

// router에서 비즈니스로직을 분리 => service.ts는 Django에서 views.py들에 해당함
export const readAllMember = (req: Request, res: Response) => {
  try {
    const members = EbridgeMember;
    // throw new Error("DB connection error");
    res.status(200).send({
      sucess: true,
      data: {
        members,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// READ :: 특정 멤버 조회
export const readOneMember = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const member = EbridgeMember.find((member) => {
      return member.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        member,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// CREATE :: 멤버 생성
export const createOneMember = (req: Request, res: Response) => {
  try {
    const data = req.body;
    EbridgeMember.push(data);
    res.status(201).send({
      success: true,
      data: { data },
    });
  } catch (error: any) {
    error.message = "Create failed";
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// PUT :: data 통째 업데이트
export const updateMemberData = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    console.log(`body :: ${body}`);
    let result;
    EbridgeMember.forEach((member) => {
      if (member.id === params.id) {
        member = body;
        result = member;
      }
    });
    res.status(200).send({
      success: true,
      data: { result },
    });
  } catch (error: any) {
    error.message = "Create failed";
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// PATCH :: 부분적 업데이트
export const patchMemberData = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    console.log(`body :: ${body}`);
    let result;
    EbridgeMember.forEach((member) => {
      if (member.id === params.id) {
        // 구조분해 할당
        // 기존의 데이터를 key-value로 분해하여 첫번쨰 인자의 key-value와 두번쨰인자의 key-value를 비교해서 중복되는 key에 대한 값은 2번쨰인자의 value값으로 치환한다.
        member = { ...member, ...body };
        result = member;
      }
    });
    res.status(200).send({
      success: true,
      data: { result },
    });
  } catch (error: any) {
    error.message = "Create failed";
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// DELETE :: 데이터 삭제
export const deleteMemberData = (req: Request, res: Response) => {
  try {
    const params = req.params;
    console.log(`params id :: ${params.id}`);
    const newEbMember = EbridgeMember.filter(
      (member) => member.id !== params.id
    );
    console.log(`new member :: ${newEbMember}`);
    res.status(200).send({
      success: true,
      data: newEbMember,
    });
  } catch (error: any) {
    error.message = "Create failed";
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

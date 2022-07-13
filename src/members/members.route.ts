import { EbridgeMember, EbridgeType } from "./members.model";
import { Router } from "express";
import {
  createOneMember,
  deleteMemberData,
  patchMemberData,
  readAllMember,
  readOneMember,
  updateMemberData,
} from "./members.service";

/* router와 service 분리 -> router는 Django에서 urls.py에 해당 */
const router = Router();

// READ :: 전체 멤버 조회
router.get("/members", readAllMember);

// READ :: 특정 멤버 조회
router.get("/members/:id", readOneMember);

// CREATE :: 멤버 생성
router.post("/members", createOneMember);

// PUT :: data 통째 업데이트
router.put("/members/:id", updateMemberData);

// PATCH :: 부분적 업데이트
router.patch("/members/:id", patchMemberData);

// DELETE :: 데이터 삭제
router.delete("/members/:id", deleteMemberData);

export default router;

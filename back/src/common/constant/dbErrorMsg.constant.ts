export const dbErrorMsg = <const>{
   D000: (tableName: string, id: string | number) => ({
      desc: "update요청한 table에 id는 없는 경우",
      msg: `${tableName}에 ${id}이(가) 존재하지 않습니다.`,
   }),
   D001: (tableName: string, id: string | number) => ({
      desc: "insert요청한 table에 id가 중복되는 경우",
      msg: `${tableName}의 ${id}가 중복되었습니다.`,
   }),
};

export const makeErrorMsgConstant = <T extends keyof typeof dbErrorMsg>(
   code: T,
   ...arg: Parameters<typeof dbErrorMsg[T]>
): { desc: string; msg: string } => dbErrorMsg[code].apply(null, arg);

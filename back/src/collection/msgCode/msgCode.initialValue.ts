export interface ErrorMsgInitialValueItem {
   code: string;
   msg: string;
   explanation: string;
   desc?: string;
}

export const msgCodeInitialValue = <const>[
   {
      code: "0000",
      msg: `{0}에 해당하는 코드가 없습니다.`,
      explanation: "요청한 코드가 없는 경우",
   },
   {
      code: "0001",
      msg: `{0}에 {1}이(가) 존재하지 않습니다.`,
      explanation: "update요청한 table에 id는 없는 경우",
   },
   {
      code: "0002",
      msg: `{0}에 {1}이(가) 존재하지 않습니다.`,
      explanation: "update요청한 table에 id는 없는 경우",
   },
];

export const _errorMsgInitialValue = msgCodeInitialValue as unknown as ErrorMsgInitialValueItem[];

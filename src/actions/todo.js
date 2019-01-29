// ここにActionCreatorを書いていく

// TODO入力欄に入力された内容をstoreに渡すために
// payloadに入力内容を含むactionをreturnする関数(ActionCreator)を
// 作成する
export const changeInputTodo = todo => {
  return {
    type: "CHANGE_INPUT_TODO", // actionのtypeは大文字で書くのが一般的
    payload: {
      inputTodo: todo // reducerが処理する時, action.payload.inputTodoでこの値が取れる
    }
  };
};

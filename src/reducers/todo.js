// ここにreducerを書く
// actionがdispatchされるとreducerにactionが流れていく
// action.typeにかかれた文字列をswitchの条件に入れて、処理をわける
// reducerはただの関数で、引数は2つとれる
// 1つ目はstate, 2つ目はdispatchされたaction

const initialState = {
  inputTodo: ""
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT_TODO": // actionのtypeで処理が分岐する
      return {
        ...state, // 「...」はスプレッド演算子といって、オブジェクトの中身を展開する
        inputTodo: action.payload.inputTodo // /src/actios/todo.js で作ったaction creatorが返してくれるactionのpayloadのデータを利用する。今回は、入力欄に入力された文字がここに入る
      };
    default:
      return {
        ...state
      };
  }
};

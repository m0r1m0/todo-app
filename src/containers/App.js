// containerコンポーネントはここ(/src/containers)に書く
// containerコンポーネントの役割は、reduxの機能をreactで使えるようにすること
// 具体的には、connectという関数を利用して、reactのコンポーネントにpropsを渡す
import { connect } from "react-redux";
import App from "../App";
// propsにはstore のstateや、actionをdispatchする関数を渡すことができる

// 今回はtodo 入力欄に入力されたときにactionをdispatchする関数と
// todo入力欄に何が入力されているかの情報をpropsとして渡す

// mapDispatchToPropsは第一引数にdispatchという関数が入ってくる
// dispatchはactionを発行するための関数で、actionを発行するとreducerが動いてstateを書き換えられる
// 今回は入力欄に入力された内容をstateに保存していきたいので、actions/todo.jsで定義したCHANGE_INPUT_TODOアクションをdispatchする
// このアクションは、actions/todo.js の changeInputTodoという関数（actionCreator)を実行すれば得られる
import { changeInputTodo } from "../actions/todo";
const mapDispatchToProps = dispatch => {
  // ここではchangeInputというpropsにdispatchする関数を渡している
  return {
    changeInput: () => {
      dispatch(changeInputTodo());
    }
  };
};

// mapStateToPropsは引数を1つ取る関数で、アプリ全体のstateを引数に取る。
// 今回はここでtodo入力欄に何が入力されているかの情報をpropsにする。
// todo入力欄に何が入力されているかは inputTodoに保持されている
const mapStateToProps = state => {
  // ここではinputTextというpropsにstoreのstateのinputTodoという値を渡している
  return {
    inputText: state.todo.inputTodo
  };
};

// Appコンポーネントにpropsを渡す（connect）
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

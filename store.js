// npm i redux
import { createStore } from 'redux';

// set State 資料

const data = {num: 1}

// actions 動作

const addNum = article => ({
  type: "addNum",
  payload: article
});

// 將資料與動作綁定在一起 reducer, 第一個是資料，第二個是動作
const rootReducer = (state= data, action) => {
  switch (action.type) {
    case "addNum":
      return { num: state.num + action.payload};
    default:
      return state;
  }
}

// 將reducer 放進store裡，保管所有的資料

const store = createStore(rootReducer)
// for test
export  {store, addNum};

// for test
window.data = data;
window.store = store;
window.addNum = addNum;


// store.getState()// {num: 1}
// 訂閱監聽
// store.subscribe(()=>{console.log("資料變動了")})

// 發動動作
// store.dispatch(addNum(1))
//  資料變動了
// {type: "addNum", payload: 1}
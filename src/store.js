import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'; //异步

//默认state
const defaultState = {
    PageTitle: '首页',
    GetNum: 20
}

//action生成器,返回action
export const AddAction = (num) => {
    return {
        type: 'ADD',
        num: num,
    }
}

//action生成器,返回action
export const TwoAction = () => {
    return {
        type: 'PINGFANG'
    }
}

//action生成器,返回action
export const ThreeAction = () => {
    return {
        type: 'LIFANG'
    }
}

//action生成器,返回方法
export const GetAction = () => {
    return (dispatch, getState) => {
        fetch('./data.json').then(res => res.json()).then(res => {
            console.log(res)
            dispatch({
                type: 'GET',
                num: Number(res[3])
            })
        })
    }
}

//action生成器,返回action
export const PageAction = (data) => {
    return {
        type: 'SET_PAGE_TITLE',
        data: data
    }
}

//reducer1:GetNum
const GetNum = (state = defaultState.GetNum, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.num;
        case 'PINGFANG':
            return state * state;
        case 'LIFANG':
            return state * state * state;
        case 'GET':
            return action.num;
        default:
            return state;
    }
}

//reducer2:PageTitle
const PageTitle = (state = defaultState.PageTitle, action) => {
// 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'SET_PAGE_TITLE':
            return action.data
        default:
            return state
    }
}

export const store = createStore(combineReducers({GetNum, PageTitle}), applyMiddleware(thunk))

//store.state映射
export const mapStateToProps = (state) => {
    return {
        num: state.GetNum,
        title: state.PageTitle
    }
}

//store.dispatch映射
export const mapDispatchToProps = (dispatch) => {
    return {
        add: (...arg) => dispatch(AddAction(...arg)),
        pingFang: (...arg) => dispatch(TwoAction(...arg)),
        liFang: (...arg) => dispatch(ThreeAction(...arg)),
        get: (...arg) => dispatch(GetAction(...arg)),
        setTitle: (...arg) => dispatch(PageAction(...arg)),
    }
}
import React from "react";
import * as actions from "../actions/action";
import Item from "../components/component";
import { connect } from "react-redux";

class ItemContainer extends React.Component {
  componentDidMount() {
    this.props.initLoad();
  }

  render() {
    return <Item {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    listData: state.itemReducer.listData,
    activePage: state.itemReducer.activePage,
    totalPage: state.itemReducer.totalPage,
    textSearch: state.itemReducer.textSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initLoad: () => {
      dispatch(actions.getRequest());
    },
    addData: (data) => {
      dispatch(actions.addRequest(data));
    },
    deleteData: (data) => {
      dispatch(actions.deleteRequest(data));
    },
    updateData: (data) => {
      dispatch(actions.updateRequest(data));
    },
    searchData: (data) => {
      dispatch(actions.searchRequest(data));}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

import React from 'react';
import {connect} from 'react-redux';
import {follow,setCurrentPage,nofollow, toggleFollowingProgress, requestUsers} from '../../redux/users_reducer';
import Users from './Users';
import Preloader from "../Common/Preloader/preloader";
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUserCount, getUsers } from '../../redux/users-selector';

class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage,  pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props
        this.props.requestUsers(pageNumber,pageSize)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        nofollow={this.props.nofollow}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingInProgress={this.props.followingInProgress}
             />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users:getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount:getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)  ,
        followingInProgress: getFollowingInProgress(state),
    }
} 

export default compose(
    connect(mapStateToProps, {follow, nofollow, setCurrentPage, toggleFollowingProgress, requestUsers})
)(UsersContainer)
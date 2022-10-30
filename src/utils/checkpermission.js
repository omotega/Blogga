const checkPermission = (requestUser,resourceUserId) => {
    if(requestUser.userId === resourceUserId.toString()) {
        return
    } else {
        return ('not authorized access to this route')
    }
}

module.exports = {
    checkPermission,
}
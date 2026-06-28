/* eslint no-unused-vars: 0 */

class FunctionalError extends Error {}

class CommandNotFoundError extends FunctionalError {
    constructor( command ) {
        super();
        this.message = `${ command }：命令未找到`;
    }
}

class InvalidCommandParameter extends FunctionalError {
    constructor( command ) {
        super();
        this.message = `命令 ${ command } 的参数无效`;
    }
}

class AddressNotFoundError extends FunctionalError {
    constructor( address ) {
        super();
        this.message = `错误：无法连接到地址 ${ address }`;
    }
}

class AddressIsEmptyError extends FunctionalError {
    constructor() {
        super();
        this.message = "错误：需要指定一个地址";
    }
}

class UsernameIsEmptyError extends FunctionalError {
    constructor() {
        super();
        this.message = "用户名为空";
    }
}

class InvalidCredsSyntaxError extends FunctionalError {
    constructor() {
        super();
        this.message = "凭据格式无效：请输入用户名，或 用户名:密码";
    }
}

class InvalidPasswordError extends FunctionalError {
    constructor( userName ) {
        super();
        this.message = `用户 ${ userName } 的密码错误`;
    }
}

class MailServerIsEmptyError extends FunctionalError {
    constructor() {
        super();
        this.message = "收件箱中没有新邮件。";
    }
}

class InvalidMessageKeyError extends FunctionalError {
    constructor() {
        super();
        this.message = "无效的邮件编号。";
    }
}

class AlreadyOnServerError extends FunctionalError {
    constructor( serverAddress ) {
        super();
        this.message = `你已经在本服务器（${ serverAddress }）上了`;
    }
}

class UnknownUserError extends FunctionalError {
    constructor( userName ) {
        super();
        this.message = `未知用户 ${ userName }`;
    }
}

class ServerRequireUsernameError extends FunctionalError {
    constructor( serverAddress ) {
        super();
        this.message = `该服务器需要用户名才能访问：ssh 用户名@${ serverAddress }`;
    }
}

class JsonFetchParseError extends FunctionalError {
    constructor( message ) {
        super();
        this.message = message;
    }
}

import Util from '../util';

const HTTP_POST_METHOD = 'post';
const HTTP_GET_METHOD = 'get';


// 新增note
export function addNote(opts) {
    return Util.ajax({
        method: HTTP_POST_METHOD,
        url: '/addNote',
        opts
    });
}

// 编辑note
export function editNote(opts) {
    return Util.ajax({
        method: HTTP_POST_METHOD,
        url: '/updateNote',
        opts
    });
}

// 删除note
export function deleteNote(opts) {
    return Util.ajax({
        method: HTTP_POST_METHOD,
        url: '/deleteNote',
        opts
    });
}

// 查询note列表
export function getNoteList(opts) {
    return Util.ajax({
        method: HTTP_GET_METHOD,
        url: '/queryNotes',
        opts
    });
}



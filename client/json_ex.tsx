// 목록 불러오기 (get) -> home
// 응답 형식 ResponsePostList[]
interface ResponsePostList {
  id : number;
  title : string;
  name : string;
  content : string;
  date : string;
}

// 글 작성 (post) -> context
interface WritePost {
  title : string;
  name : string;
  content : string;
}

// 글 지우기 (post) -> context
interface DeletePost {
  id : number;
}

// 글 읽기 (get) -> readPost
// 요청
interface RequestPost {
  id : number;
}
// 응답
interface ResponsePost {
  id : number;
  title : string;
  name : string;
  content : string;
  date : string;
}





export { }
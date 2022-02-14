1. routing

nextjs는 pages루트에 폴더 및 파일을 만들면 그게 라우트가 된다.
index.js는 "/"를 뜻한다. pages/user/index.js -> "/user"

Link를 사용해 SPA구현 가능 그리고 Link안에 또 a를 넣는 이유는
classname을 사용하려면 Link말고 a태그에 넣어야 하기 때문이다.

nextjs는 기본적으로 코드 스플리팅과 prefetching이 내장되어있다.
그래서 위 라우팅 쓰면 이 두개의 기능은 그냥 쓸 수 있다. 아주 좋다.

1-1. dynamic route segments

파일명을 [example].js 이렇게 해주면 "/:example" 같이 사용할 수 있다. 파라미터로 쓸 수 있다는 말이다.
[username].js와 first-post.js가 pages안에 같은 디렉토리에 있으고 url에 "/first-post"를 입력하면 당연히 first-post가 나온다.

2. Assets, Metadata, and CSS

Image('next/image")
이미지 리사이징 및 최적화
정적 이미지 사용할 때 매우 편하다. layout을 유용하게 사용하면 된다.
사용할 때 몇몇 주의조건 (ex) layout="fill" 사용시 parent element가 position: relative 적용되어 있어야 한다 등) 공식문서 참조바람

Metadata
Head와 Script (써드파티 자바스크립트 사용) 그냥 둘다 최적화 해놓은 것

style
next.js는 기본적으로 Sass, CSS Modules, styled-jsx가 내장되어 있고 emotion과 styled-components 라이브러리도 사용가능하다.
CSS같은 경우 예시처럼 [파일이름].module.css로 만들 수 있고 사용법이 되게 편하다.

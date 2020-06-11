# react-nodebird
ZeroCho님의 React강의를 보며 진행하는 프로젝트

# 강의 필기노트
## Next
- pages 디렉터리를 필수로 생성하여 내부에 각 페이지에 대한 파일을 생성! => 별도의 router를 설정할 필요없이 파일이름 자체로 라우팅 가능

## _app.js
pages디렉터리 내부에 있는 _app.js는 pages디렉터리 내부의 모듈들에 공통으로 
적용해야 할 코드를담고 있음.

## 웹 사이트는 반응형과 적응형으로 나눔.
- 반응형: 화면 크기에 따라 스타일링이 달라지는 것.
- 적응형: 데스크탑, 태블릿, 모바일에 따라 페이지가 각각 존재하는 것.
- 반응형으로 개발할 때는 가로부터 & 모바일부터, 즉 화면 사이즈가 작은 것부터 하는 것이 좋음.
- xs: 모바일, sm: 태블릿, md: 작은 데스크탑
- gutter: 컬럼 사이의 간격을 의미
- a를 사용하여 새창으로 사이트를 이동할 때는 rel속성으로 <b>noreferer</b>와 <b>noopener</b>를 꼭 사용해서 보안 위협을 막아줌.

## Hooks 커스터마이징
- Hooks는 리액트 코드 내부에 1depth로 적용.

## Redux
- 중앙 데이터 저장소 같은 역할
- 데이터들을 담아두고 리액트의 컴포넌트에서 참조 가능!
- 에러 발생 시 추적이 용이(안정적). 하지만 코드량이 많아짐
- reducer: return {...state}에서 ...state를 사용하는 이유는 타이핑을 줄이기 위해서도 있지만, 객체 안에 또 다른 객체가 있는 경우 이를 직접 적으면 기존의 것을 참조하는 것이 아닌 새로운 객체를 생성하는 꼴(반복할 수록 메모리가 낭비됨).
  => 개발모드일 때는 히스토리를 가지고 있어서 메모리가 낭비되는 게 크지만, 배포모드일 때는 히스토리 정보가 필요없어 메모리정리가 계속 되기 때문에 메모리 부족할 일이 적다.
- action creator
- HYDRATE: 리덕스는 브라우저에서 돌아가는 것이기 때문에 처음 사이트 방문시 프론트엔드 서버에서 렌더링하면 리덕스의 데이터가 없다. 그래서 리덕스도 서버 사이드 렌더링에 함께 돌도록 하는 것. 서버 사이드에서 발생한 리덕스의 정보를 브라우저에 반영.

## Context API vs 라이브러리(Redux, mobx)
- 비동기를 지원하기 쉽냐 어렵냐의 차이
- 비동기 3단계: 요청, 성공, 실패
  => ContextAPI를 사용하면 이를 직접 다 구현해야함.

## Tip!
- 스타일링을 할 때 컴포넌트에 style속성에다 객체를 넘겨주는 식으로 하면 안됨x
  => 페이지가 다시 그려질 때(rerendering) 이전에 생성된 객체와 동일한 것으로 인식되지 않기 때문에 매번 새로운 객체가 생성됨.
- React Hooks의 useCallback과 useMemo의 차이?
  => useCallback을 함수를 캐싱하는 것, useMemo는 값을 캐싱하는 것
- antd의 Form은 내부에 event의 preventDefault처리를 함.
- 기존 redux를 사용할 때는 리액트 코드에서 <Provider store={store}></Provider>로 감싸줬지만, next에서는 이렇게 할 필요가 없음.(next-redux-wrapper 6버전 이상부터 가능.)
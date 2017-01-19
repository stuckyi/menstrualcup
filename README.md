# share workflow
---
## 최초 1번만 할 것


meteor install
```
curl https://install.meteor.com/ | sh
```


### yarn install
```
npm install yarn
```

### sass install
```
sudo npm install -g sass
```





## git

```
git clone https://github.com/stuckyi/menstrualcup.git //원격저장소 clone : 원격저장소 내용을 로컬 저장소로 복제한다.
```

### 프로젝트 기반 파일 설치
프로젝트 구동에 필요한 관련 파일과 의존성 파일을 자동으로 설치해준다.
```
yarn install
```

## git branch 생성하기
자신의 로컬 저장소에 `develop`이라는 이름의 branch를 만든다.

```
git checkout -b develop
```



## 실행해보기
meteor 를 실행한다.
```
meteor run
```



## 수정, 반영하기

`.scss`파일이 변경되면 `.css`파일에 자동으로 반영해준다.

> 이 프로젝트에서는 public 경로 아래에서만 --watch 기능을 사용해주기로 한다 일단.
```
sass --watch ./public/.
```


---
수정했다고 했을 때.
---

- 기본적으로는 수정이 되면 ng2가 자동으로 `localhost:3000` 페이지를 새로고침한다.




## 변경내용 로컬 저장소에 등록 하고 커밋하기

```
git add .  //현재 local 폴더의 변경내용 추가
git commit -m "feat(add): add btn" //commit과 commit message 등록
```

## 변경내용 로컬 저장소의 master 브랜치로 통합하기 

```
git push -u origin master // git push -u [푸시받을 원격저장소] [푸시할 로컬브랜치]
```






## fourseven:scss

[meteor developers page](https://guide.meteor.com/build-tool.html#css-which-preprocessor)에서는 sass를 meteor에서 build하는 가장 좋은 plugin은 [fourseven:scss](https://atmospherejs.com/fourseven/scss)라고했다. 따라서 설명하고있는대로 진행하기로 했다.




### Installation
meteor의 pacakge management system 을 사용하여 설치한다.

```
meteor add fourseven:scss
```
meteor에 `fourseven:scss`를 add한다.

```
//설치 완료 후 메시지
Changes to your project's package version selections:
fourseven:scss  added, version 3.13.0

fourseven:scss: Style with attitude. Sass and SCSS support for Meteor.js.
```

만약 이것을 사용하기를 원한다면, 가지고있는 pacakge control file에 (다음과 같은) `onUse` block을 추가한다.

```
Package.onUse(function (api) {
  ...
  api.use('fourseven:scss');
  ...
});

```


> 결정적으로, fourseven:scss는 angular-compiler와 conflict가 나서 사용하지 않기로하고. 기타 추가적인 부분에 대해서는 peter나 arnold를 통해서 물어보는 방법이 더 효율적일 것이라고 생각하고있다.(17.1.10)


```
sass --watch public/sass/color.scss:public/sass/color.css
```


## 특정 파일만 `--watch`하는 것이 아니라 전체 파일 또는 디렉토리 `watch`하기

```
sass --watch . //전체 파일
sass --watch ./public/. //public 폴더의 전체파일
```




---


## sns share
- [sns share : facebook param에 대한 블로그글](http://bbyong79.tistory.com/69)

일반적으로 페이스북 공유하기 기능을 추가하는 방법은 크게 2가지가 있다.
1. 새로나온 자바스크립트 SDK 방식
  - `FB.ui()`로 공유하기 팝업을 불러내고, 공유가 성공/실패 여부를 콜백으로 받을 수도 있다.
2. 기존 `https://www.facebook.com/sharer/sharer.php` 방식
  - 일반적인 형태 
    - `"https://www.facebook.com/sharer/sharer.php?s=100&p[title]=제목&p[summary]=요약내용&p[url]=링크&p[images][0]=썸네일이미지경로"`
    -  `[images][0]` 이 `"og:image"` 메타태그와, `[summary]` 가 `"og:description"` 메타태그와, `[title]`가 `"og:title"` 메타 태그와 우연히 동일해서 데이터가 똑바로 나온 것이다
    - 결론
      - `https://www.facebook.com/sharer/sharer.php?s=100&p[title]=제목&p[summary]=요약내용&p[url]=링크&p[images][0]=썸네일이미지경로` : 이 경로에 대하여 `[title]=제목&p[summary]=요약내용`, `[images][0]=썸네일이미지경로` 파라미터는 불필요한 것이다. 여기서 제대로 전달되고, 활용되는 것은 오직 URL 뿐이다.
      - 페이스북에서 url 파라미터의 값을 받아서 해당 url 의 페이지를 읽어들인다. 그리고 그 페이지에서 og 태그가 있으면 og 태그에 맞는 정보를 공유하기 팝업에 뿌려주고 그렇지 않으면 아무런 정보도 뿌려주지 않는다.

### 예시

- [예시링크](https://www.facebook.com/sharer/sharer.php?s=100&p[title]=테스트입니다&p[summary]=요약내용입니다.&p[url]=http://bbyong79.tistory.com/66&p[images][0]=http://www.okjsp.net/profile/24029.jpg)

위의 링크를 클릭해보면 title, summary, images는 전혀 적용이 안되는 것을 볼 수 있다.
적용이 되는 것은 단지 url 뿐이고, 해당 url 에 있는 og 태그의 정보를 가지고 와서 공유팝업에 뿌려주는 것을 눈으로 확인할 수 있다.

- 출처: http://bbyong79.tistory.com/69 [어느 천년에...]


- [관련 블로그](http://cocosoft.kr/372)




### for developers

- [twitter for developers](https://dev.twitter.com/web/javascript/initialization)
- [kakao for developers](https://developers.kakao.com/docs/social-plugins/story-share)

### OG protocol
- [OG protocol api docs](http://opengraphprotocol.org/)


---
##modal ref
- [w3school modal example](http://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2)
- [w3school modal ref](http://www.w3schools.com/howto/howto_css_modals.asp)

## css styles

- `<img align="left|right|middle|top|bottom">`
- `vertical-align` : block속성이 기본인 요소들에는 적용되지 않는다. 따라서 `<span>` 과 class를 활용하여 작업중이다.
  - 이럴 때 발색하는 문제는 없을까? 예를들어 시맨틱웹?

## sass with gulp

```
yarn add gulp --dev
yarn add gulp-sass --dev
```
`app/client` 디렉토리에서 `.scss`파일 생성 후, `gulp sass` 키워드 입력시 자동으로 `.css`파일로 변환 해주는 `gulpfile.js`

```javascript
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./client/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./client/**/*.scss', ['sass']);
});
``` 


### sass 설치 후 에러 메시지 발생

```
Your app is crashing. Here's the latest log:
/Users/admin/.meteor/packages/meteor-tool/.1.4.2_1.8l45ms++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/server-lib/node_modules/fibers/future.js:280
						throw(ex);
						^

Error: Can't find npm module 'node-sass'.
 Did you forget to call 'Npm.depends' in package.js within the 'modules-runtime' package?
    at Object.require (/Users/admin/Desktop/_JAMONG/_PLAY/_menses/.meteor/local/build/programs/server/boot.js:200:17)
    at options.fallback (packages/modules-runtime.js:445:18)
    at require (packages/modules-runtime.js:112:16)
    at meteorInstall.node_modules.gulp-sass.index.js (packages/modules.js:610:21)
    at fileEvaluate (packages/modules-runtime.js:181:9)
    at require (packages/modules-runtime.js:106:16)
    at meteorInstall.gulpfile.js (app/app.js:12:12)
    at fileEvaluate (packages/modules-runtime.js:181:9)
    at require (packages/modules-runtime.js:106:16)
    at app/app.js:26:1
Exited with code: 1
Your application is crashing. Waiting for file change.
```
- `Error: Can't find npm module 'node-sass'.` :  따라서 일단 `yarn add node-sass`를 해줬다.
- 다시 `meteor run`을 통해 app을 실행시켜본다.
- `npm rebuild node-sass` 보통 이런 경우에 이렇게 나온단다.
- `npm install` 후 `meteor run`



---
---
## metoer에 gulp 설치&활용하기

gulp를 sass auto complie에 사용하기위해 설치하고자했다. 그래서 언제나 그랬듯 이렇게 설치했다.
```
npm install gulp
```
그런데 설치마치고 나서도 gulp 실행이 안된다.

```
local gulp not found in ~
Try running: npm install gulp
```

```
npm link gulp
```
역시나 안된다.
---
---
## 개발참고 문서
- [MDN, CSS box-sizing] (https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)
- [Bootstrap, Collapse](http://bootstrapk.com/javascript/#collapse)
- [ng2 Material, Tabs](https://justindujardin.github.io/ng2-material/#/components/tabs)

---
---
# Angular2-Meteor Boilerplate

[![bitHound Overall Score](https://www.bithound.io/github/Urigo/angular2-meteor-base/badges/score.svg)](https://www.bithound.io/github/Urigo/angular2-meteor-base) [![bitHound Dependencies](https://www.bithound.io/github/Urigo/angular2-meteor-base/badges/dependencies.svg)](https://www.bithound.io/github/Urigo/angular2-meteor-base/master/dependencies/npm)


## Usage

Since Meteor v1.4 you can use one command to create a working Angular2 app based on this boilerplate:

```
meteor create --example angular2-boilerplate
```

## NPM Scripts

This boilerplate comes with predefined NPM scripts, defined in `package.json`:

- `$ npm run start` - Run the Meteor application.
- `$ npm run start:prod` - Run the Meteor application in production mode.
- `$ npm run build` - Creates a Meteor build version under `./build/` directory.
- `$ npm run clear` - Resets Meteor's cache and clears the MongoDB collections.
- `$ npm run meteor:update` - Updates Meteor's version and it's dependencies.
- `$ npm run test` - Executes Meteor in test mode with Mocha.
- `$ npm run test:ci` - Executes Meteor in test mode with Mocha for CI (run once).

## Boilerplate Contents

This boilerplate contains the basics that requires to quick start with Angular2-Meteor application.

This package contains:

- TypeScript support (with `@types`) and Angular 2 compilers for Meteor
- Angular2-Meteor
- Angular 2 (core, common, compiler, platform, router, forms)
- SASS, LESS, CSS support (Also support styles encapsulation for Angular 2)
- Testing framework with Mocha and Chai
- [Meteor-RxJS](http://angular-meteor.com/meteor-rxjs/) support and usage

This application also contains demo code:

- Main Component (`/client/app.component`)
- Demo Child Component (`/client/imports/demo/demo.component`)
- Demo Service (`/client/imports/demo/demo-data.service`)
- Demo Mongo Collection (`/both/demo.collection.ts`) with a TypeScript interface as model.

The Main component loads the child component, which uses the demo service that gets it's data from the demo collection.

### Folder Structure

The folder structure is a mix between [Angular 2 recommendation](https://johnpapa.net/angular-2-styles/) and [Meteor 1.3 recommendation](https://guide.meteor.com/structure.html).

### Client

The `client` folder contains single TypeScript (`.ts`) file which is the main file (`/client/app.component.ts`), and bootstrap's the Angular 2 application.

The main component uses HTML template and SASS file.

The `index.html` file is the main HTML which loads the application by using the main component selector (`<app>`).

All the other client files are under `client/imports` and organized by the context of the components (in our example, the context is `demo`).


### Server

The `server` folder contain single TypeScript (`.ts`) file which is the main file (`/server/main.ts`), and creates the main server instance, and the starts it.

All other server files should be located under `/server/imports`.

### Common

Example for common files in our app, is the MongoDB collection we create - it located under `/both/demo-collection.ts` and it can be imported from both client and server code.

### Testing

The testing environment in this boilerplate based on [Meteor recommendation](https://guide.meteor.com/testing.html), and uses Mocha as testing framework along with Chai for assertion.

There is a main test file that initialize Angular 2 tests library, it located under `/client/init.test.ts`.

All other test files are located near the component/service it tests, with the `.test.ts` extension.

The `DemoComponent` contains example for Angular 2 tests for Component, and in the server side there is an example for testing Meteor collections and stub data.

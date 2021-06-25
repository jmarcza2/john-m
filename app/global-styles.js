import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .route-wrapper {
  position: relative;
}

 .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

.ant-comment-content  .speech{

  position: relative;
  background: #777;
  border-radius: .4em;
  color: #FFF;
  padding: 12px;
  float: left;
  width: 80%;
  margin-left: 4rem;
}
.ant-comment-content .speech:after{
    content: "";
    position: absolute;
    left: 0;
    top: 32px;
    width: 0;
    height: 0;
    border: 1.594em solid transparent;
    border-right-color: #777;
    border-left: 0;
    border-top: 0;
    margin-top: -0.797em;
    margin-left: -1.594em;
  }
.ant-list-items{
  width: 100%;
}

.card-container {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-flow: column;
  }
}

#waka figure {
  float: left;
  width: 50%
}

`;

export default GlobalStyle;

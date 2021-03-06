




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>Backbone.localStorage/backbone.localStorage-min.js at master · jeromegn/Backbone.localStorage · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jeromegn/Backbone.localStorage" name="twitter:title" /><meta content="Backbone.localStorage - A localStorage adapter for Backbone.js" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/43325?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/43325?s=400" property="og:image" /><meta content="jeromegn/Backbone.localStorage" property="og:title" /><meta content="https://github.com/jeromegn/Backbone.localStorage" property="og:url" /><meta content="Backbone.localStorage - A localStorage adapter for Backbone.js" property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4F6157CD:0242:388E268:533D4A2C" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="X7W1VEwvRXpBS6VhozOLzcumm6LFfk1cF3AHWsOT3pU=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-927f0bd30c92b2f1f72bead5d0086b25492d8375.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-db8f6f9bbe1b0e611d0e24fc905420b0c99729f2.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-dca097f6f454ee06b43ea4817a154392e3caf824.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-50a9b02be7b7235510a2895ac6ebed3f2a85a55f.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="8e9e695b6da47c97e6a3b4ff4559572d">

        <link data-pjax-transient rel='permalink' href='/jeromegn/Backbone.localStorage/blob/c91acbc01a7b84d2ee9bb4e724a5b3cc8321a279/backbone.localStorage-min.js'>

  <meta name="description" content="Backbone.localStorage - A localStorage adapter for Backbone.js" />

  <meta content="43325" name="octolytics-dimension-user_id" /><meta content="jeromegn" name="octolytics-dimension-user_login" /><meta content="1022555" name="octolytics-dimension-repository_id" /><meta content="jeromegn/Backbone.localStorage" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1022555" name="octolytics-dimension-repository_network_root_id" /><meta content="jeromegn/Backbone.localStorage" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jeromegn/Backbone.localStorage/commits/master.atom" rel="alternate" title="Recent Commits to Backbone.localStorage:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fjeromegn%2FBackbone.localStorage%2Fblob%2Fmaster%2Fbackbone.localStorage-min.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="jeromegn/Backbone.localStorage"
      data-branch="master"
      data-sha="02116b79763c63765d56f05fdae9440f98c99917"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="jeromegn/Backbone.localStorage" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fjeromegn%2FBackbone.localStorage"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/jeromegn/Backbone.localStorage/stargazers">
      1,383
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fjeromegn%2FBackbone.localStorage"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/jeromegn/Backbone.localStorage/network" class="social-count">
        590
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/jeromegn" class="url fn" itemprop="url" rel="author"><span itemprop="title">jeromegn</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/jeromegn/Backbone.localStorage" class="js-current-repository js-repo-home-link">Backbone.localStorage</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/jeromegn/Backbone.localStorage" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jeromegn/Backbone.localStorage">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/jeromegn/Backbone.localStorage/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /jeromegn/Backbone.localStorage/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>14</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/jeromegn/Backbone.localStorage/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /jeromegn/Backbone.localStorage/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/jeromegn/Backbone.localStorage/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /jeromegn/Backbone.localStorage/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/jeromegn/Backbone.localStorage/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /jeromegn/Backbone.localStorage/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/jeromegn/Backbone.localStorage/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /jeromegn/Backbone.localStorage/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jeromegn/Backbone.localStorage.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jeromegn/Backbone.localStorage.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jeromegn/Backbone.localStorage" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jeromegn/Backbone.localStorage" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/jeromegn/Backbone.localStorage" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save jeromegn/Backbone.localStorage to your computer and use it in GitHub Desktop." aria-label="Save jeromegn/Backbone.localStorage to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/jeromegn/Backbone.localStorage/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download jeromegn/Backbone.localStorage as a zip file"
                   title="Download jeromegn/Backbone.localStorage as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:7878c031114b6034e3f08d29d11cbb41 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/jeromegn/Backbone.localStorage/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/blob/gh-pages/backbone.localStorage-min.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/blob/master/backbone.localStorage-min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.7/backbone.localStorage-min.js"
                 data-name="v1.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.7">v1.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.6/backbone.localStorage-min.js"
                 data-name="v1.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.6">v1.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.5/backbone.localStorage-min.js"
                 data-name="v1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.5">v1.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.4/backbone.localStorage-min.js"
                 data-name="v1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.4">v1.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.3/backbone.localStorage-min.js"
                 data-name="v1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.3">v1.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.2/backbone.localStorage-min.js"
                 data-name="v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.2">v1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.1/backbone.localStorage-min.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.0/backbone.localStorage-min.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jeromegn/Backbone.localStorage" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Backbone.localStorage</span></a></span></span><span class="separator"> / </span><strong class="final-path">backbone.localStorage-min.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="backbone.localStorage-min.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Jerome Gravel-Niquet" class="main-avatar js-avatar" data-user="43325" height="24" src="https://avatars3.githubusercontent.com/u/43325?s=140" width="24" />
    <span class="author"><a href="/jeromegn" rel="author">jeromegn</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-10-04T13:02:36-04:00" title="2013-10-04 19:02:36">October 04, 2013</time>
    <div class="commit-title">
        <a href="/jeromegn/Backbone.localStorage/commit/363a7c38e0903d29ee978f0987d4456065db27dc" class="message" data-pjax="true" title="Bump to 1.1.7">Bump to 1.1.7</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>14</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="jeromegn" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=jeromegn"><img alt="Jerome Gravel-Niquet" class=" js-avatar" data-user="43325" height="20" src="https://avatars3.githubusercontent.com/u/43325?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="nekman" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=nekman"><img alt="Nils" class=" js-avatar" data-user="568019" height="20" src="https://avatars0.githubusercontent.com/u/568019?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="phoey" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=phoey"><img alt="Joseph McElroy" class=" js-avatar" data-user="49480" height="20" src="https://avatars0.githubusercontent.com/u/49480?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="dfcreative" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=dfcreative"><img alt="Dmitry Ivanov" class=" js-avatar" data-user="300067" height="20" src="https://avatars3.githubusercontent.com/u/300067?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="ryan-roemer" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=ryan-roemer"><img alt="Ryan Roemer" class=" js-avatar" data-user="445557" height="20" src="https://avatars2.githubusercontent.com/u/445557?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="uzikilon" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=uzikilon"><img alt="Uzi Kilon" class=" js-avatar" data-user="874904" height="20" src="https://avatars1.githubusercontent.com/u/874904?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="sontek" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=sontek"><img alt="John Anderson" class=" js-avatar" data-user="151924" height="20" src="https://avatars0.githubusercontent.com/u/151924?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="juhovh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=juhovh"><img alt="" class=" js-avatar" data-user="262958" height="20" src="https://avatars3.githubusercontent.com/u/262958?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="spiralman" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=spiralman"><img alt="Thomas Stephens" class=" js-avatar" data-user="1293832" height="20" src="https://avatars0.githubusercontent.com/u/1293832?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="nerdgore" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=nerdgore"><img alt="Torsten Walter" class=" js-avatar" data-user="1582533" height="20" src="https://avatars2.githubusercontent.com/u/1582533?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="Dremora" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=Dremora"><img alt="Kirill Korolyov" class=" js-avatar" data-user="242202" height="20" src="https://avatars1.githubusercontent.com/u/242202?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="bdimcheff" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=bdimcheff"><img alt="Brandon Dimcheff" class=" js-avatar" data-user="14111" height="20" src="https://avatars2.githubusercontent.com/u/14111?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="andriijas" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=andriijas"><img alt="Andreas Cederström" class=" js-avatar" data-user="33141" height="20" src="https://avatars2.githubusercontent.com/u/33141?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="4vanger" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=4vanger"><img alt="Andrew Kulinich" class=" js-avatar" data-user="596990" height="20" src="https://avatars0.githubusercontent.com/u/596990?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jerome Gravel-Niquet" class=" js-avatar" data-user="43325" height="24" src="https://avatars3.githubusercontent.com/u/43325?s=140" width="24" />
            <a href="/jeromegn">jeromegn</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Nils" class=" js-avatar" data-user="568019" height="24" src="https://avatars0.githubusercontent.com/u/568019?s=140" width="24" />
            <a href="/nekman">nekman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Joseph McElroy" class=" js-avatar" data-user="49480" height="24" src="https://avatars0.githubusercontent.com/u/49480?s=140" width="24" />
            <a href="/phoey">phoey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dmitry Ivanov" class=" js-avatar" data-user="300067" height="24" src="https://avatars3.githubusercontent.com/u/300067?s=140" width="24" />
            <a href="/dfcreative">dfcreative</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ryan Roemer" class=" js-avatar" data-user="445557" height="24" src="https://avatars2.githubusercontent.com/u/445557?s=140" width="24" />
            <a href="/ryan-roemer">ryan-roemer</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Uzi Kilon" class=" js-avatar" data-user="874904" height="24" src="https://avatars1.githubusercontent.com/u/874904?s=140" width="24" />
            <a href="/uzikilon">uzikilon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="John Anderson" class=" js-avatar" data-user="151924" height="24" src="https://avatars0.githubusercontent.com/u/151924?s=140" width="24" />
            <a href="/sontek">sontek</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="" class=" js-avatar" data-user="262958" height="24" src="https://avatars3.githubusercontent.com/u/262958?s=140" width="24" />
            <a href="/juhovh">juhovh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Thomas Stephens" class=" js-avatar" data-user="1293832" height="24" src="https://avatars0.githubusercontent.com/u/1293832?s=140" width="24" />
            <a href="/spiralman">spiralman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Torsten Walter" class=" js-avatar" data-user="1582533" height="24" src="https://avatars2.githubusercontent.com/u/1582533?s=140" width="24" />
            <a href="/nerdgore">nerdgore</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kirill Korolyov" class=" js-avatar" data-user="242202" height="24" src="https://avatars1.githubusercontent.com/u/242202?s=140" width="24" />
            <a href="/Dremora">Dremora</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Brandon Dimcheff" class=" js-avatar" data-user="14111" height="24" src="https://avatars2.githubusercontent.com/u/14111?s=140" width="24" />
            <a href="/bdimcheff">bdimcheff</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andreas Cederström" class=" js-avatar" data-user="33141" height="24" src="https://avatars2.githubusercontent.com/u/33141?s=140" width="24" />
            <a href="/andriijas">andriijas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andrew Kulinich" class=" js-avatar" data-user="596990" height="24" src="https://avatars0.githubusercontent.com/u/596990?s=140" width="24" />
            <a href="/4vanger">4vanger</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>6 lines (6 sloc)</span>
          <span class="meta-divider"></span>
        <span>2.944 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/jeromegn/Backbone.localStorage?branch=master&amp;filepath=backbone.localStorage-min.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/jeromegn/Backbone.localStorage/raw/master/backbone.localStorage-min.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/jeromegn/Backbone.localStorage/blame/master/backbone.localStorage-min.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * Backbone localStorage Adapter</span></div><div class='line' id='LC3'><span class="cm"> * Version 1.1.7</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * https://github.com/jeromegn/Backbone.localStorage</span></div><div class='line' id='LC6'><span class="cm"> */</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">typeof</span> <span class="nx">exports</span><span class="o">==</span><span class="s2">&quot;object&quot;</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">require</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="o">?</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="o">=</span><span class="nx">b</span><span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;underscore&quot;</span><span class="p">),</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;backbone&quot;</span><span class="p">))</span><span class="o">:</span><span class="k">typeof</span> <span class="nx">define</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="o">&amp;&amp;</span><span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="o">?</span><span class="nx">define</span><span class="p">([</span><span class="s2">&quot;underscore&quot;</span><span class="p">,</span><span class="s2">&quot;backbone&quot;</span><span class="p">],</span><span class="kd">function</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="p">(</span><span class="nx">c</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">_</span><span class="p">,</span><span class="nx">d</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">Backbone</span><span class="p">)})</span><span class="o">:</span><span class="nx">b</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span><span class="nx">Backbone</span><span class="p">)})(</span><span class="k">this</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">function</span> <span class="nx">c</span><span class="p">(){</span><span class="k">return</span><span class="p">((</span><span class="mi">1</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">())</span><span class="o">*</span><span class="mi">65536</span><span class="o">|</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">).</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">d</span><span class="p">(){</span><span class="k">return</span> <span class="nx">c</span><span class="p">()</span><span class="o">+</span><span class="nx">c</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">()</span><span class="o">+</span><span class="nx">c</span><span class="p">()</span><span class="o">+</span><span class="nx">c</span><span class="p">()}</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">Store</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">)</span><span class="k">throw</span><span class="s2">&quot;Backbone.localStorage: Environment does not support localStorage.&quot;</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="o">=</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">)</span><span class="o">||</span><span class="p">[]},</span><span class="nx">a</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,{</span><span class="nx">save</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">))},</span><span class="nx">create</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="o">||</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">d</span><span class="p">(),</span><span class="nx">a</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">idAttribute</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="p">)),</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">a</span><span class="p">)),</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">()),</span><span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">(),</span><span class="k">this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">a</span><span class="p">)},</span><span class="nx">update</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">b</span><span class="p">)),</span><span class="nx">a</span><span class="p">.</span><span class="nx">include</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">())</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">()),</span><span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">(),</span><span class="k">this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">b</span><span class="p">)},</span><span class="nx">find</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">jsonData</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="p">))},</span><span class="nx">findAll</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">chain</span><span class="o">||</span><span class="nx">a</span><span class="p">)(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">jsonData</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">))},</span><span class="k">this</span><span class="p">).</span><span class="nx">compact</span><span class="p">().</span><span class="nx">value</span><span class="p">()},</span><span class="nx">destroy</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">isNew</span><span class="p">()</span><span class="o">?!</span><span class="mi">1</span><span class="o">:</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">===</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">()}),</span><span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">(),</span><span class="nx">b</span><span class="p">)},</span><span class="nx">localStorage</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">localStorage</span><span class="p">},</span><span class="nx">jsonData</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">a</span><span class="p">)},</span><span class="nx">_clear</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">(),</span><span class="nx">c</span><span class="o">=</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;^&quot;</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">),(</span><span class="nx">a</span><span class="p">.</span><span class="nx">chain</span><span class="o">||</span><span class="nx">a</span><span class="p">)(</span><span class="nx">b</span><span class="p">).</span><span class="nx">keys</span><span class="p">().</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">c</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">a</span><span class="p">)}).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="nx">a</span><span class="p">)}),</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">length</span><span class="o">=</span><span class="mi">0</span><span class="p">},</span><span class="nx">_storageSize</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">length</span><span class="p">}}),</span><span class="nx">b</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">.</span><span class="nx">sync</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">Store</span><span class="p">.</span><span class="nx">sync</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">localSync</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">localStorage</span><span class="o">||</span><span class="nx">c</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">();</span><span class="k">try</span><span class="p">{</span><span class="k">switch</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">case</span><span class="s2">&quot;read&quot;</span><span class="o">:</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">id</span><span class="o">!=</span><span class="kc">undefined</span><span class="o">?</span><span class="nx">e</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">:</span><span class="nx">e</span><span class="p">.</span><span class="nx">findAll</span><span class="p">();</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;create&quot;</span><span class="o">:</span><span class="nx">f</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="nx">c</span><span class="p">);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;update&quot;</span><span class="o">:</span><span class="nx">f</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">c</span><span class="p">);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;delete&quot;</span><span class="o">:</span><span class="nx">f</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">destroy</span><span class="p">(</span><span class="nx">c</span><span class="p">)}}</span><span class="k">catch</span><span class="p">(</span><span class="nx">i</span><span class="p">){</span><span class="nx">i</span><span class="p">.</span><span class="nx">code</span><span class="o">===</span><span class="mi">22</span><span class="o">&amp;&amp;</span><span class="nx">e</span><span class="p">.</span><span class="nx">_storageSize</span><span class="p">()</span><span class="o">===</span><span class="mi">0</span><span class="o">?</span><span class="nx">g</span><span class="o">=</span><span class="s2">&quot;Private browsing is unsupported&quot;</span><span class="o">:</span><span class="nx">g</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">message</span><span class="p">}</span><span class="k">return</span> <span class="nx">f</span><span class="o">?</span><span class="p">(</span><span class="nx">d</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">.</span><span class="nx">success</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">VERSION</span><span class="o">===</span><span class="s2">&quot;0.9.10&quot;</span><span class="o">?</span><span class="nx">d</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">d</span><span class="p">)</span><span class="o">:</span><span class="nx">d</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">f</span><span class="p">)),</span><span class="nx">h</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">f</span><span class="p">))</span><span class="o">:</span><span class="p">(</span><span class="nx">g</span><span class="o">=</span><span class="nx">g</span><span class="o">?</span><span class="nx">g</span><span class="o">:</span><span class="s2">&quot;Record Not Found&quot;</span><span class="p">,</span><span class="nx">d</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">.</span><span class="nx">error</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">VERSION</span><span class="o">===</span><span class="s2">&quot;0.9.10&quot;</span><span class="o">?</span><span class="nx">d</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">d</span><span class="p">)</span><span class="o">:</span><span class="nx">d</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">g</span><span class="p">)),</span><span class="nx">h</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">g</span><span class="p">)),</span><span class="nx">d</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">.</span><span class="nx">complete</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">.</span><span class="nx">complete</span><span class="p">(</span><span class="nx">f</span><span class="p">),</span><span class="nx">h</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">.</span><span class="nx">promise</span><span class="p">()},</span><span class="nx">b</span><span class="p">.</span><span class="nx">ajaxSync</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">sync</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">getSyncMethod</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">localStorage</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">collection</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">localStorage</span><span class="o">?</span><span class="nx">b</span><span class="p">.</span><span class="nx">localSync</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">ajaxSync</span><span class="p">},</span><span class="nx">b</span><span class="p">.</span><span class="nx">sync</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">getSyncMethod</span><span class="p">(</span><span class="nx">c</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,[</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">])},</span><span class="nx">b</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">});</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03334s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>


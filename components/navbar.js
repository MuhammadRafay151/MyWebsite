document.write(`
<nav class="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll="100">
<div class="container">
    <div class="navbar-translate">

        <a class="navbar-brand" href="#">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>

    <div class="collapse navbar-collapse">
        <ul class="navbar-nav ">
            <li class="nav-item">
                <a class="nav-link" href="#">
                    Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#c1">
                    Social</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#pro">
                    Projects</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle " href="javascript:;" id="navbarDropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    FYP
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item"  href="/fyp/project-introduction.html">
                        Introduction</a>
                    <a class="dropdown-item" target="_blank" href="http://mr-devs.ml/">Website</a>
                    <a class="dropdown-item"  href="/fyp/project-features.html">Features</a>
                    <a class="dropdown-item"  href="/fyp/project-architecture.html">Detail
                        Architecture</a>
                    <a class="dropdown-item"  href="/fyp/project-summarized-architecture.html">
                    Summarized Architecture</a>
                    <a class="dropdown-item"  href="/fyp/project-artifacts.html">
                    Artifacts</a>
                    <a class="dropdown-item"  href="/fyp/project-references.html">
                    References</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle " href="javascript:;" id="navbarDropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Webinars
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" target="_blank"
                        href="https://www.youtube.com/watch?v=xR8o3uhB2Pk&t=158s">Vanilla JavaScript</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle " href="javascript:;" id="navbarDropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Trainings
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="/js.html">Javascript Training</a>
                    <a class="dropdown-item" href="/vuejs.html">Vuejs Training</a>
                    <a class="dropdown-item" href="/articles/jwtrealsignout.html">JWT Real Logout</a>
                </div>
            </li>

        </ul>
    </div>
</div>
</nav>`)

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <!-- Tells the browser on mobile phones for instance to not zoom out on the page -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" >
		<meta name="description" content="This is a combination of a personal website and my developer profile. As I advance in my career, I'll be making updates to this website to further enhance it. I'll be adding projects throughout my career, and new amazing styles as I create them.">

        <!-- ======================== Imported Stylesheets and Google Fonts ========================= -->
        <!-- Normalize The CSS -->
		<!-- <link rel="stylesheet" type="text/css" href="src/vendors/css/normalize.css" > -->
		<link rel="stylesheet" type="text/css" href="./node_modules/normalize.css/normalize.css" >


        <!-- Animation CSS -->
        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> -->
        <link rel="stylesheet" href="./node_modules/animate.css/animate.min.css"/>


        <!-- custom scrollbar -->
        <!-- <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css"/> -->
        <link rel="stylesheet" href="./node_modules/simplebar/src/simplebar.css"/>


        <!-- Grid Layout -->
        <link rel="stylesheet" type="text/css" href="./src/vendors/css/grid.css">

        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

        <!-- ============================ My Stylesheet and PHP ================================== --> 
        
        <!-- My PHP File-->
        <?php include('./src/resources/php/form_process.php'); ?>

        <!-- My Style Sheets -->
        <link rel="stylesheet" type="text/css" href="./src/resources/css/style.css" >
		<link rel="stylesheet" type="text/css" href="./src/resources/css/queries.css" >

        <!-- My Website Logo -->
        <link rel="shortcut icon" href="./favicon.ico" />

        <!--  ======================== Imported JavaScript Files  ================================= -->
        <!-- Waypoints -->
        <!-- <script async src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"></script> -->
        <script async src="./node_modules/waypoints/lib/noframework.waypoints.min.js"></script>


        <!-- Favicons -->
        <!-- <script async src="src/vendors/js/all.js"></script> -->
        <script async src="./node_modules/@fortawesome/fontawesome-free/js/all.js"></script>


        <!-- CryptoJS-->
        <!-- <script async src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"></script> -->
        <script async src="./node_modules/crypto-js/crypto-js.js"></script>


        <!-- Custom scrollbar -->
        <!-- <script async src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script> -->
        <script async src="./node_modules/simplebar/dist/simplebar.min.js"></script>

        
        <!-- ========================== My JavaScript File ========================================= -->
        <script defer type="module" src="./src/resources/js/controller.js"></script>
        
        <title>Jesse Wolven's Personal Website/Developer Profile</title>
        <meta name="theme-color" content="#ffffff">
    </head>
    <body>
        <header id="home">

        <!-- ======================================================================== -->
        <!--                         Main Navigation                                  -->
        <!-- ======================================================================== -->
            <nav>
                <div class="col span-1-of-7 main-navi">
                    <div class="row profile-head">
                        <div class="row profile-picture-row">
                            <a href="#home" class="btn-home smooth-scroll">
                                <img src="src/resources/img/profilePhotos/profile-photo-cubsGame.jpg" alt="Profile photo" class="profile-photo nav__link" onContextMenu="return false;" draggable="false">
                            </a>
                        </div>
                        <div class="row my-heading-row">
                            <h1>Jesse Wolven</h1>
                            <h2>Software Engineer</h2>
                        </div>
                    </div>
                    <div class="row nav">
                        <div class="row about">
                            <div class="nav-container about-btn">
                                <a href="#about-section" class="nav__link smooth-scroll">
                                    <h2>About</h2>
                                </a>
                            </div>
                        </div>
                        <div class="row skills main-nav">
                            <div class="nav-container nav__btn skills-btn">
                                <a href="#skills-section" class="nav__link smooth-scroll">
                                    <h2>Skills</h2>
                                </a>
                            </div>
                        </div>
                        <div class="row music main-nav">
                            <div class="nav-container nav__btn music-btn">
                                <a href="#music-section" class="nav__link smooth-scroll">
                                    <h2>Music</h2>
                                </a>
                            </div>
                        </div>
                        <div class="row photography main-nav">
                            <div class="nav-container nav__btn photo-btn">
                                <a href="#photography-section" class="nav__link smooth-scroll">
                                    <h2>Photography</h2>
                                </a>
                            </div>
                        </div>
                        <div class="row contact main-nav">
                            <div class="nav-container nav__btn contact-btn">
                                <a href="#contact-section" class="contact-hover nav__link smooth-scroll">
                                    <h2>Contact</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row social-media">
                        <div class="col span-1-of-4 social-link">
                            <a href="https://www.linkedin.com/in/jesse-wolven/" target="_blank">
                                <i class="fab fa-linkedin icon-linkedin"></i>
                            </a>
                        </div>
                        <div class="col span-1-of-4 social-link">
                            <a href="https://www.instagram.com/jessewolven/" target="_blank">
                                <i class="fab fa-instagram icon-instagram"></i>
                            </a>
                        </div>
                        <div class="col span-1-of-4 social-link-circular">
                            <a href="https://open.spotify.com/user/1236811661?si=7fbb40ccb3bc4f43" target="_blank">
                                <i class="fab fa-spotify icon-spotify"></i>
                            </a>
                        </div>
                        <div class="col span-1-of-4 social-link-circular">
                            <a href="https://github.com/jesse-wolven" target="_blank">
                                <i class="fab fa-github icon-github"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>  
                <div class="seperator-wrapper">
                    <div class="seperator gradient">
                    </div>
                </div>

                <div class="mobile-nav-icon">
                    <button class="mobile-nav-btn"><i class="fas fa-bars"></i></button>
                </div>
                <div class="col span-1-of-4 mobile-nav">
                    <div class="row profile-head">
                        <div class="row close-mobile-nav">
                            <button class="btn-close-mobile-nav">&times;</button>
                        </div>
                        <button class="btn-close-mobile-nav-small">&times;</button>
                        <div class="row profile-picture-row">
                            <a href="#home" class="btn-home smooth-scroll">
                                <img src="src/resources/img/profilePhotos/profile-photo-cubsGame.jpg" alt="Profile photo" class="profile-photo nav__link" onContextMenu="return false;" draggable="false">
                            </a>
                        </div>
                        <div class="row my-heading-row">
                            <h1>Jesse Wolven</h1>
                            <h2>Software Engineer</h2>
                        </div>
                    </div>
                    <div class="row nav">
                        <div class="row about">
                            <div class="nav-container about-btn">
                                <a href="#about-section" class="nav__link smooth-scroll">
                                    <h2>About</h2>
                                </a>
                            </div>
                        </div>
                        <div class="row skills main-nav">
                            <div class="nav-container nav__btn skills-btn">
                                <a href="#skills-section" class="nav__link smooth-scroll">
                                    <h2>Skills</h2>
                                </a>
                            </div>
                        </div>
                        <div class="row music main-nav">
                            <div class="nav-container nav__btn music-btn">
                                <a href="#music-section" class="nav__link smooth-scroll">
                                    <h2>Music</h2>
                                </a>
                            </div>
                        </div>
                        <div class="row photography main-nav">
                            <div class="nav-container nav__btn photo-btn">
                                <a href="#photography-section" class="nav__link smooth-scroll">
                                    <h2>Photography</h2>
                                </a>
                            </div>
                        </div>
                        <div class="row contact main-nav">
                            <div class="nav-container nav__btn contact-btn">
                                <a href="#contact-section" class="contact-hover nav__link smooth-scroll">
                                    <h2>Contact</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row social-media">
                        <div class="col span-1-of-4 social-link">
                            <a href="https://www.linkedin.com/in/jesse-wolven/" target="_blank">
                                <i class="fab fa-linkedin icon-linkedin"></i>
                            </a>
                        </div>
                        <div class="col span-1-of-4 social-link">
                            <a href="https://www.instagram.com/jessewolven/" target="_blank">
                                <i class="fab fa-instagram icon-instagram"></i>
                            </a>
                        </div>
                        <div class="col span-1-of-4 social-link-circular">
                            <a href="https://open.spotify.com/user/1236811661?si=7fbb40ccb3bc4f43" target="_blank">
                                <i class="fab fa-spotify icon-spotify"></i>
                            </a>
                        </div>
                        <div class="col span-1-of-4 social-link-circular">
                            <a href="https://github.com/jesse-wolven" target="_blank">
                                <i class="fab fa-github icon-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mobile-overlay hidden"></div>

                
            </nav>

            <!-- ======================================================================== -->
            <!--                             Header Page                                  -->
            <!-- ======================================================================== -->
            
            <div class="col span-6-of-7 quote-text">
                <div class="row quote-text-1">
                    <blockquote><h1>"He believed that you could cure racism and hate...<br/> literally cure it,<br/> by injecting music and love into peoples lives.<br/><br/></h1></blockquote>
                </div>
                 
                <div class="row quote-text-2">
                    <blockquote><h2>One day he was scheduled to perform at a peace rally,<br/> gunman came to his house and shot him down.<br/> Two days later, he walked out on that stage and sang.<br/><br/></h2></blockquote>
                </div>

                <div class="row quote-text-3">
                    <blockquote><h3>Somebody asked him, 'Why?',<br/> he said - <br/>'The people who are trying to make this world worse are not taking a day off.<br/> How can I?'"</h3></blockquote>
                </div>  

                <div class="row citation">
                    <cite class="quote-citation">———. I Am Legend. United States: Warner Bros. Pictures, 2007. </cite>
                </div>
            </div>

        </header>

        <!-- ======================================================================== -->
        <!--                         About Me Section                                 -->
        <!-- ======================================================================== -->

        <section class="section-about" id="about-section">
            <div class="row section-heading">
                <h2 class="customfont ">About Me</h2>
            </div>
            <div class="row about-row ">
                <div class="col span-1-of-2 about-me-col">
                    <div class="row about-para-row">
                        <p class="AboutMePara"> &emsp; Hello I’m Jesse, a girl dad to a beautiful Alaskan Malamute named Jane. I have many hobbies such as: art, music, movies, technology, travel, photography, hiking, and golf. But, I have a serious passion for music and technology.<br/><br/>&emsp;I’ve experienced enough in life to know that my happiness and my mental health are more important than money, status, or really anything else. And they say that one third of a man’s life is spent working.<br/><br/>&emsp; Thus, I believe the best thing I can do for my happiness is to get a job that I’m passionate about that doesn’t feel like work. For this reason, I’m currently pursuing a software engineering position for a company where music is involved.<br/>
                        </p>
                    </div>
                </div>
                <div class="col span-1-of-2 about-me-img-col">
                    <img src="src/resources/img/aboutMe/SeqoiaNtlForest.jpg" alt="About Me Photo" class="about-me-photo" onContextMenu="return false;" draggable="false">
                </div>

                <!-- Vertical Screens: -->
                <div class="row about-me-img-row">
                    <img src="src/resources/img/aboutMe/SeqoiaNtlForest.jpg" alt="About Me Photo" class="about-me-photo" onContextMenu="return false;" draggable="false">
                </div>
                <div class="row about-para-row about-me-row">
                    <p class="AboutMePara"> &emsp; Hello I’m Jesse, a girl dad to a beautiful Alaskan Malamute named Jane. I have many hobbies such as: art, music, movies, technology, travel, photography, hiking, and golf. But, I have a serious passion for music and technology.<br/><br/>&emsp;I’ve experienced enough in life to know that my happiness and my mental health are more important than money, status, or really anything else. And they say that one third of a man’s life is spent working.<br/><br/>&emsp; Thus, I believe the best thing I can do for my happiness is to get a job that I’m passionate about that doesn’t feel like work. For this reason, I’m currently pursuing a software engineering position for a company where music is involved.<br/>
                    </p>
                </div>
                
            </div>
        </section>

        <!-- ======================================================================== -->
        <!--                            Skills Section                                -->
        <!-- ======================================================================== -->

        <section class="section-skills" id="skills-section">
            <div class="row section-heading">
                <h2 class="customfont">Skills & Experiences</h2>
            </div>
            <div class="row skills-row">
                <div class="col span-1-of-2 skills-col-1">    
                    <div class="row skills-para-row">
                        <p>&emsp;The list of my tech skills spans far beyond what’s listed here, but rather than droning on about it I’ll tell you my number one skill. Which is my ability to learn and adapt... on my own, with help from others, and from my mistakes. If college and my previous job have taught me anything, it’s this and how important this skill is.</p>
                    </div>
                </div>
                <div class="col span-1-of-2 skills-col-2">
                    <div class="row skills-graph-row">
                        <img src="src/resources/img/SkillsAndExperiences/skill-graph-transparent1.png" alt="Skills Graph" class="skills-graph">
                    </div>
                    <div class="row bepco-row">
                        <img src="https://www.bepco.com/wp-content/uploads/2019/12/BEPCO-Logo-Color.svg" alt="BEPCO-Logo-Color" style="background-color:  rgba(255, 255, 255, 0.5);" class="bepco-logo">
                        <p class="date">(June 2018 - June 2020)</p>
                        <p class="bepco-description">&emsp;Among the many things I learned in this experience: I furthered my understanding in C++ OOP, in altering and improving code written by others, in maintaining code with the future in mind, and in extracting requirements from customers.</p>
                    </div>
                    <!-- <div class="row unemployment-row">
                        <h3>Unemployment</h3>
                        <p class="date">(June 2020 - Present)</p>
                        <p>Did what I could.</p>
                    </div> -->
                </div>
            </div>

            <!-- ===================== Small Screens ======================== -->
            <div class="row skills-row-small">
                <div class="row skills-para-row">
                    <p>&emsp;The list of my tech skills spans far beyond what’s listed here, but rather than droning on about it I’ll tell you my number one skill. Which is my ability to learn and adapt... on my own, with help from others, and from my mistakes. If college and my previous job have taught me anything, it’s this and how important this skill is.</p>
                </div>
                <div class="row skills-graph-row">
                    <img src="src/resources/img/SkillsAndExperiences/skill-graph-transparent1.png" alt="Skills Graph" class="skills-graph">
                </div>
                <div class="row bepco-row">
                    <img src="https://www.bepco.com/wp-content/uploads/2019/12/BEPCO-Logo-Color.svg" alt="BEPCO-Logo-Color" style="background-color:  rgba(255, 255, 255, 0.5);" class="bepco-logo">
                    <p class="date">(June 2018 - June 2020)</p>
                    <p class="bepco-description">&emsp;Among the many things I learned in this experience: I furthered my understanding in C++ OOP, in altering and improving code written by others, in maintaining code with the future in mind, and in extracting requirements from customers.</p>
                </div>
                <!-- <div class="row unemployment-row">
                    <h3>Unemployment</h3>
                    <p class="date">(June 2020 - Present)</p>
                    <p>Did what I could.</p>
                </div> -->
            </div>

            <!-- ===================== Timeline Modal Window ======================== -->
            <div class="row timeline-row ">
                <button class="btn btn--show-modal animate__animated " id="wp--1">Timeline</button>
            </div>
            <div class="modal hidden">
                <button class="btn--close-modal">&times;</button>
                <h3 class="modal__header">Yearly Timeline</h3>
                <img src="src/resources/img/SkillsAndExperiences/YearlyTimeline.png" alt="Yearly Timeline">
                <h3 class="modal__header">Unemployment Timeline</h3>
                <img src="src/resources/img/SkillsAndExperiences/MonthlyTimeline2.png" alt="Unemployment Timeline">
            </div>
            <div class="overlay hidden"></div>
        </section>

        <!-- ======================================================================== -->
        <!--                             Music Section                                -->
        <!-- ======================================================================== -->

        <section class="section-music" id="music-section">
            <div class="row section-heading">
                <h2 class="customfont">Music</h2>
            </div>
            <div class="row music-para-row">
                <div class="row">
                    <p class="music-page-description">For your pleasure, and mine, I’ve set up an API connection to Spotify to display your top 10 artists and tracks. Select the time frame, and click below to see what they are!</p>
                </div>
                <div class="row time-frame-row">
                    <button class="time-frame time-frame-1">
                        4 Weeks
                    </button> 
                    <button class="time-frame time-frame-2">
                        6 Months
                    </button> 
                    <button class="time-frame time-frame-3">
                        All Time
                    </button> 
                </div>
                <div class="row api-button-row">
                   <button class="btn-spotify-api draw">
                        Click Here!
                    </button> 
                </div>
                
            </div>
            <div class="row music-row hidden bigger-screen">
                <div class="col span-1-of-2 top-artists-col">
                    <div class="row artist-header">
                        <p>Top Artists</p>
                    </div>
                    <div class="row artists-row" id="artistsRowId">
                    </div>    
                </div>
                <div class="col span-1-of-2 top-tracks-col">
                    <div class="row track-header">
                        <p>Top Tracks</p>
                    </div>
                    <div class="row tracks-row" id="tracksRowId">
                    </div>      
                </div>
            </div>

            <!-- Vertical Screen -->
            <div class="row music-row hidden smaller-screen">
                <div class="row top-artists-col">
                    <div class="row artist-header">
                        <p>Top Artists</p>
                    </div>
                    <div class="row artists-row" id="artistsRowId2">
                    </div>    
                </div>
                <div class="row top-tracks-col">
                    <div class="row track-header">
                        <p>Top Tracks</p>
                    </div>
                    <div class="row tracks-row" id="tracksRowId2">
                    </div>      
                </div>
            </div>
        </section>

        <!-- ======================================================================== -->
        <!--                         Photography Section                              -->
        <!-- ======================================================================== -->

        <section class="section-photography" id="photography-section">
            <div class="row section-heading">
                <h2 class="customfont">Photography</h2>
            </div>
            <div class="row photo-row-background" >
                <div class="row photograph-grid" id="custom-scrollbar">
                </div>
            </div>
            <div class="row copyright">
                <p class="copy-right-notice">All images © 2021 Jesse Wolven. Unauthorized use and/or duplication of this material without express and written permission from Jesse Wolven is strictly prohibited. You may contact me through the form below to request authorized use.</p>
            </div>
            <!-- ========================= High Quality Photo Modal Window ========================= -->
            <div class="photoModal hidden">
                <div class="row">
                    <button class="photoBtn--close-modal">&times;</button>
                </div>
                <div class="row">
                    <button class="slider__btn slider__btn--left">&larr;</button>
                    <img id="highQualityPhotoId" src="#placeHolder" alt="High Quality Photo" class="highQualityPic" onContextMenu="return false;" draggable="false">
                    <button class="slider__btn slider__btn--right">&rarr;</button>
                </div>
                <div class="row photoScroller" id="modalPhotoScrollbar" style="height:25vh;width:75vw;direction:ltr">
                </div>
            </div>
            <div class="photoOverlay hidden"></div>
        </section>

        <!-- ======================================================================== -->
        <!--                        Contact Me Section                                -->
        <!-- ======================================================================== -->

        <section class="section-contact" id="contact-section">
            <div class="row section-heading">
                <h2 class="customfont">Contact</h2>
            </div>
            <div class="row contact-row">
                <div class="col span-1-of-2">
                    <p class="contact-me-para">
                        &emsp;I’m interested any and all opportunities where I have the opportunity to learn, including freelance. However, if you have any other request, question, or even a comment on my website feel free to message me.
                    </p>
                    <form class="contact-form" action="<?= $_SERVER['PHP_SELF']; ?>" method="POST">
                        <div class="row">
                            <span class="error"><?= $name_error ?></span>
                            <input placeholder="Name" type="text" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Name'" name="name" value="<?= $name ?>"/>
                        </div>
                        <div class="row">
                            <span class="error"><?= $email_error ?></span>
                            <input placeholder="Email" type="text" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Email'" name="email" value="<?= $email ?>"/>
                        </div>
                        <div class="row">
                            <span class="error"><?= $subject_error ?></span>
                            <input placeholder="Subject" type="text" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Subject'" name="subject" value="<?= $subject ?>"/>
                        </div>
                        <div class="row">
                            <span class="error"><?= $message_error ?></span>
                            <textarea placeholder="Message" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Message'" name="message"><?= $message ?></textarea>
                        </div>
                        <div class="row form-button">
                            <button class="btn form-message" type="submit" name="submit">Send message</button>
                        </div>
                        <div class="row success-row">
                            <span class="success"><?= $success ?></span>
                        </div>
                    </form>
                </div>
                <div class="col span-1-of-2 static-map">
                    <!-- Google API Static Map -->
                </div>
            </div>

            <!-- Vertical Screen -->
            <div class="row contact-row-vertical">
                <div class="row static-map-2">
                    <!-- Google API Static Map -->
                </div>
                <div class="row">
                    <p class="contact-me-para">
                        &emsp;I’m interested any and all opportunities where I have the opportunity to learn, including freelance. However, if you have any other request, question, or even a comment on my website feel free to message me.
                    </p>
                    <form class="contact-form" action="<?= $_SERVER['PHP_SELF']; ?>" method="POST">
                        <div class="row">
                            <span class="error"><?= $name_error ?></span>
                            <input placeholder="Name" type="text" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Name'" name="name" value="<?= $name ?>"/>
                        </div>
                        <div class="row">
                            <span class="error"><?= $email_error ?></span>
                            <input placeholder="Email" type="text" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Email'" name="email" value="<?= $email ?>"/>
                        </div>
                        <div class="row">
                            <span class="error"><?= $subject_error ?></span>
                            <input placeholder="Subject" type="text" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Subject'" name="subject" value="<?= $subject ?>"/>
                        </div>
                        <div class="row">
                            <span class="error"><?= $message_error ?></span>
                            <textarea placeholder="Message" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Message'" name="message"><?= $message ?></textarea>
                        </div>
                        <div class="row form-button">
                            <button class="btn form-message" type="submit" name="submit">Send message</button>
                        </div>
                        <div class="row success-row">
                            <span class="success"><?= $success ?></span>
                        </div>
                    </form>
                </div>
                
            </div>
        </section>
    </body>
</html>
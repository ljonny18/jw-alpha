Vue.component('profile-landing', {
	template: `
		<section class="section-full d-flex align-content-center">
			<div class="container align-self-center text-center">
				<img :src="logo" class="img-fluid landing-logo mb-5">
			</div>
		</section>
	`,
	data() {
		return {
			logo: "assets/images/logo.png"
		}
	}
})

Vue.component('profile-intro', {
	template: `
		<section class="section-full d-flex align-content-center">
			<div class="container align-self-center">
				<img :src="logo" class="img-fluid profile-logo mb-5">
				<p class="lead-lg">My name is Jon. I was born in the UK and currently living in Germany.</p>
				<p class="lead">I'm a Web Developer currently working at the <a v-bind:href="mpi_is_url" target="_blank">Max Planck Institute for Intelligent Systems</a>.</p>
				<p class="lead">When I'm not working, playing with my children or travelling in my van, I can be found in the forest running, riding my motorbike or in my garage making things.</p>
				<p class="mt-5">
				 	<i class="fad fa-laptop-code profile-icon text-muted pr-3"></i>
                    <i class="fad fa-baby profile-icon text-muted pr-3"></i>
                    <i class="fad fa-shuttle-van profile-icon text-muted pr-3"></i>
                    <i class="fad fa-tools profile-icon text-muted pr-3"></i>
                    <i class="fad fa-tree profile-icon text-muted pr-3"></i>
                    <i class="fad fa-running profile-icon text-muted pr-3"></i>
                    <i class="fad fa-motorcycle profile-icon text-muted pr-3"></i>
                </p>
			</div>
		</section>
	`,
	data() {
		return {
			logo: "assets/images/logo.png",
			mpi_is_url: "https://is.mpg.de"

		}
	}
})

Vue.component('profile-text-banner-pink', {
	template: `
		<section class="section-pink section-text-banner">
			<p class="text-banner-text text-center mb-0">Full Stack Developer with over 10 years of experience</p>
		</section>
	`
})

Vue.component('professional-profile', {
	template: `
		<section>
			<div class="container">
				<h1>Professional Profile</h1>
				<p>I am a reliable, motivated and enthusiastic Developer with over ten years experience. I provide high attention to detail and have an instinct for good design.</p>
				<p>My Professional Career began as a Front-End Developer, however, I have always been interested in the overlap between design and development and soon moved into the world of Full Stack Development.</p>
				<p>I strive to create attractive, usable and functional applications. I design, build, test and deploy applications covering all phases of the application development life cycle, from start to finish.</p>
				<p>I am currently working as a Rails Developer and my daily toolbox consists of, but is not limited to: Ruby on Rails RSpec RVM MVC ElasticSearch Phusion Passenger Capistrano GitLab PhotoShop HTML(5) CSS(3) JS JSON MySQL … and all the other various tools, libraries and technologies related to them.</p>
			</div>
		</section>
	`
})

Vue.component('spare-time', {
	template: `
		<section>
			<div class="container">
				<p>In my (limited) spare time I like to dabble with and learn new relevant skills and techologies, some of which currently on the hitlist include: Node React Gatsby Django laravel MongoDB ... I also oftently find myself helping out friends with any technical or layout aspects of there Worpress websites and blogs</p>
			</div>
		</section>
	`
})

Vue.component('current-projects', {
	template: `
		<section>
			<div class="container">
				<h1>Current projects</h1>
				<p>I am currently working at the Max Planck Institute for Intelligent Systems where I have developed and am responsible for multiple websites and applications (including the Institute website).</p>
				<p>My most recent (ongoing) project is a Custom Content Management System (Scientific Web Engine) which I have developed to support Institute websites for groups, projects, collaborations and general scientific and research requirements.</p>
				<p>The CMS is continually in development with already many websites running on it, some of which high profile including Cyber Valley, ELLIS, IMPRS-IS and CLS:</p>
			</div>
		</section>
	`
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
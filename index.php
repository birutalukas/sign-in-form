<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Sign In Form</title>
		<!-- Google Fonts -->
		<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700&display=swap&subset=latin-ext" rel="stylesheet">
		<!-- Main Style Sheet -->
		<link rel="stylesheet" href="assets/css/style.css">
	</head>
	<body>
		<?php
			require_once 'db_connect.php';
		?>
		<section>
			<div class="container" style="background-image: url(assets/img/bg.jpg);">
				<div class="overlay"></div>
				<div class="content">
					<div class="account">
						<button class="current" id="signIn">Sign in</button>
						<button id="joinUs">Join us</button>
					</div>

					<!-- ### Sign In Form ### -->
					<?php
						if (isset($_POST["signIn"]) && !empty($_POST["signIn"])) {

							header('Location: app.html');
						}
					?>
					<form method="POST" name="signIn" class="sign-in">
						<div class="input--field">
							<label for="signEmail">Email
								<input type="text" id="signEmail" required>
							</label>
							<div class="input--alert__email"></div>
						</div>
						<div class="input--field">
							<label for="signPassword">Password
								<input type="password" id="signPassword" required>
							</label>
							<div class="input--alert__pass"></div>
						</div>
						<div class="input--field__signed">
							<label class="input--checkbox" for="keepSigned">
								<input type="checkbox" id="keepSigned" checked>
								<span class="checkmark"></span>
								Keep me signed in
							</label>
						</div>
						<div class="input--field">
							<input type="submit" name="signIn" id="submitSignIn" value="Sign In!">
						</div>
					</form>

					<!-- ### Join Us Form ### -->
					<?php
					
					if(isset($_SESSION['auth'])){
						//cia atliksime formos apdorojima
						// print_r($_POST);

						if(!empty($_POST['submitJoin'])){
							//validuojame email
							if(!empty($_POST['joinEmail'])){
								$email = htmlentities($_POST['joinEmail'], ENT_QUOTES, 'utf-8');
							}else{
								$email = '';
							}

							//validuojame slaptazodi
							if(!empty($_POST['joinPassword'])){
								$pass = md5($_POST['joinPassword']); //uzkoduojame slaptazodi
							}else{
								$pass = '';
							}

							//validuojame slaptazodi
							if(!empty($_POST['joinPasswordRepeat'])){
								$pass_confirm = md5($_POST['joinPasswordRepeat']); //uzkoduojame slaptazodi
							}else{
								$pass_confirm = '';
							}

							//Galutinis validavimas
							if(!empty($email) && !empty($pass) && $pass == $pass_confirm){
								//registruosime vartotoja

								//formuojame uzklausa
						
								 $sql = "INSERT INTO User (`username`, `password`) VALUES ('$email', '$pass')";
								// echo $sql;
								//vykdome uzklausa su query metodu, atsakyma saugome i $result
								$result = $db->query($sql);

								if($result){
									$message = "Registration successful";									
								}else{
									$message = "Registration failed";
								}
								
							}else{
								//klaidos pranesimas
								$message = "All fields are required";
							}
						}
					}
					?>
					<form method="POST" enctype="multipart/form-data" name="submitJoin" class="join-us">
						<div class="input--field">
							<label for="joinEmail">Email
								<input type="text" name="joinEmail" id="joinEmail" required>
							</label>
							<div class="input--alert__joinEmail"></div>
						</div>
						<div class="input--field">
							<label for="joinPassword">Password
								<input type="password" name="joinPassword" id="joinPassword" required>
							</label>
							<div class="input--alert__joinPass"></div>
						</div>
						<div class="input--field">
							<label for="joinPasswordRepeat">Repeat Password
								<input type="password" name="joinPasswordRepeat" id="joinPasswordRepeat" required>
							</label>
							<div class="input--alert__joinPassRepeat"></div>
						</div>
						<div class="input--field">
							<input type="submit" id="submitJoin" value="Join Us!">
						</div>
					</form>
					<div class="restore">
						<button href="#" id="restoreAccount">Forgot password?</button>
						<button href="#" id="createAccount">Create account!</button>
					</div>
				</div>
			</div>
		</section>
		<script src="assets/scripts/custom.js"></script>
	</body>
</html>
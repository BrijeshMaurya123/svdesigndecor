<?php
$to =  "info@svdesigndecor.com";
$subject = " Enquire from Website :";

 $message = "Name :    ".$_REQUEST["name"]." 

Last Name :    ".$_REQUEST["lname"]." 
 Email ID:    ".$_REQUEST["email"]."  
 
Phone Number :    ".$_REQUEST["phone"]." 
Message :    ".$_REQUEST["message"]."


";
$from = "svdesigndecor.com";

$headers = "From: $from";

if (@mail($to, $subject, $message, $headers))
	  {
         ?>
         <script language="javascript" type="text/javascript">
		alert('Thank you for enquiry. We will contact you shortly.');
		window.location = 'index.html';
	</script>
         <?php
	  }
?>
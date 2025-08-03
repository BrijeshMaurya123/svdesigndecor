<?php
$to =  "info@svdesigndecor.com";
$subject = " Enquire from Website :";
 // $ form= $_REQUEST("email");
 $message = "Name :    ".$_REQUEST["name"]." 
Phone Number :    ".$_REQUEST["phone"]." 
Product :    ".$_REQUEST["MESH"]." 
Email ID:    ".$_REQUEST["email"]."  
State :    ".$_REQUEST["message"]."


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
	  }else
	  {
         ?>
         <script language="javascript" type="text/javascript">
		alert('Message failed.');
		window.location = 'contact.html';
	</script>
         <?php
	  }
?>
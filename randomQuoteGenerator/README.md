HTML:

Nov, 18th.
As of now I've decided to use a Bootstrap form to creat the text box that will hold the random qoutes. The form is not in the shape of a box, it's more so a rectangle. 
After I created a button, I decided to add a navbar. This was also strapped. I saved an image from google to the same folder I am currently working in. To my suprise it actually work =). 

-Navbar 
 The background color was not initially responsive due to incorrect spelling in the link tag. The original text color in the img tag turned to primary(blue). I deleted the text within that tag and ceated a p tag. The p tag text centered to the right. It should be placed beside the logo. Text-align and justify-content did not move the text. However the position propert -absolute did move it to the left but it covered the logo. 
 I decided to go with position: relative; It moved it back over the logo. I then gave the text a margin of 0 and padding of 27. Now the text is the proper position!!


  -Button:
  I Bootstrapped the button. I went with an outline button for a more sleek and minimal design. In order to execute this task I used:
  <button type="button" class="btn btn-outline-info"></button> -info applied a nice turqoiuse color. 
    **To align button I placed the button in its on div. Gave the div the class of "d-flex justify-content-center". The button is now in the center

GITHUB:
 Store/saving changes 
   --Another git process seems to be running in this repository, e.g.
an editor opened by 'git commit'. Please make sure all processes
are terminated then try again. If it still fails, a git process
may have crashed in this repository earlier:
remove the file manually to continue.
 use "rm .git/index.lock" to terminate this process. Then commit changes (git commit -m "(whatever messange you want here)". Next push changes to git "git push origin "(the branch name)". All changes should show in git now. 
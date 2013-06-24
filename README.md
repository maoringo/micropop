Micropop
==

This is a repository of micropop programs to encourage database developers.

I wrote a simple program that collect microdata about publications and   
send queries to ncbi by using ajax to get publication data on the fly.

I hope this program will be applied to not only for publications.

Please use this program and give me comments or branch.

Demo
==

[Click me](http://sagace.nibio.go.jp/publication/micropop/popup.html)

Try function
==
  
If you want to test function, please try code below!  
If you find any bugs, let me know.
  

```html
<!--on html-->
<link rel="stylesheet" href="http://sagace.nibio.go.jp/publication/micropop/micropop.css" />                                
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>              
<script src="http://sagace.nibio.go.jp/publication/micropop/micropop.js"></script>  


<ul itemscope itemtype="http://schema.org/ScholarlyArticle">
<li>Computational design, construction, and characterization of a set of specificity determining residues in protein-protein interactions
<span itemprop='entryID' content='pmid:22674858' \>
PubMed:22674858</span></li> 
</ul>

```

Then you can get title and abstract automatically.  
Enjoy!!  





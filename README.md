#imgSwap.js
##Super simple responsive images

Will be working on this readme soon

[Article and Demo](http://darbybrown.com/2013/09/09/imgswap-super-simple-responsive-images.html) 


##Basic Usage
```html

  <img src="img/path/image-sml.jpg" data-swap=true alt="my image" />  
  
  	<script src="js/imgswap.min.js"></script>
 	<script>
		imgSwap.init();
	</script>	

```

##Advanced Usage
```html

  <img src="img/path/image-sml.jpg" data-swap=true alt="my image" />  
  
  	<script src="js/imgswap.min.js"></script>
 	<script>
		imgSwap.init({
		    selector: '[data-swap]', 
		    suffixes: ['sml', 'med', 'lrg'], 
		    medium: 480,
		    large: 900,
		    throttle: 250
		});
	</script>	

```
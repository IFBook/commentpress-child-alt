Commentpress Child Theme (Alt)
========================

This is a child theme for Commentpress where the toolbar has been moved to sit under the branding, closer to the content. Use it as a "starter pack" for creating your own look and feel.

Please note: this child theme only works with the official [Commentpress theme](https://github.com/IFBook/CommentPressTheme) and Commentpress must be properly installed before using it.

## Installation ##

Please install and activate the theme by doing the following:

1. Unzip the .zip file and, if needed, rename the enclosing folder so that the theme's files are located directly inside `/wp-content/themes/commentpress-child-alt`.
2. NOTE: you may need to edit the line in `style.css` that says `Template: commentpress` if your parent Commentpress theme does not live in a folder called `commentpress`. If it does not, change this to `Template: YOURFOLDERNAME`.
2. Activate the theme.
3. Visit settings pages and configure theme.
4. You are done!

## Notes ##

The javascript functionality to hide/show the branding has been disabled by hiding the relevant toolbar button. This functionality could be reinstated by replacing the javascript file that provides it with an amended one, but would not be for the technically faint-hearted.

To do so, you would use `wp_dequeue_script()` to remove the existing javascripts, the enqueue your own versions of them. See the function `get_javascript()` in the file `class_commentpress_display.php` included in the Commentpress plugin.
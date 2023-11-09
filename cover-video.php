<?php

/**
 * Plugin Name:       Cover Video
 * Description:       Cover Video Block for Gutenberg Editor
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Hemanth Sharma
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cover-video
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}


function cover_video_block_init()
{
	register_block_type(__DIR__ . '/build/block');
}
add_action('init', 'cover_video_block_init');

function cover_video_block_enqueue(){
	wp_register_script('cover-video-libs', plugin_dir_url(__FILE__) . 'assets/fancybox.js', array(), '1.0.0', true);
	wp_register_style('cover-video-libs', plugin_dir_url(__FILE__) . 'assets/fancybox.css', array(), '1.0.0', 'all');
	wp_register_style("google-fonts", "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;700&display=swap", array(), "1.0.0", "all");
}
add_action('enqueue_block_assets', 'cover_video_block_enqueue');

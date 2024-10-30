<?php
namespace Sujin\Wordpress\Plugin\Korean_Spell_Checker;

/**
 * Gutenberg Support
 *
 * @project 한글 맞춤법 검사기 - Korean Spell Checker!
 * @author  Sujin 수진 Choi http://www.sujinc.com/
*/

if ( ! defined( 'ABSPATH' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
}

use Sujin\Wordpress\Plugin\Korean_Spell_Checker;

class Gutenberg {
	private static $instance;

	function __construct() {
		if ( ! function_exists( 'register_block_type' ) ) {
			// Gutenberg is not active.
			return;
		}

		add_action( 'init', array( $this, 'register_script' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_plugin' ) );
	}

	public function register_script() {
		$base = Korean_Spell_Checker::get_instance();
		wp_register_script(
			Korean_Spell_Checker::$plugin_name . '-gutenberg',
			$base->get_asset_url() . 'dist/gutenberg.js',
			array( 'wp-rich-text' ),
			filemtime( $base->get_asset_dir() . 'dist/gutenberg.js' )
		);
	}

	public function register_plugin() {
		wp_enqueue_script( Korean_Spell_Checker::$plugin_name . '-gutenberg' );
	}

	/**
	 * Return Instance
	 *
	 * @since 3.0
	 * @access public
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			// create new instance if not
			self::$instance = new self();
		}
		return self::$instance;
	}
}


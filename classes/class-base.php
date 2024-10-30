<?php
namespace Sujin\Wordpress\Plugin;

/**
 * Initialize
 *
 * @project 한글 맞춤법 검사기 - Korean Spell Checker!
 * @author  Sujin 수진 Choi http://www.sujinc.com/
*/

if ( ! defined( 'ABSPATH' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
}

use Sujin\Wordpress\Plugin\Korean_Spell_Checker\Editor;
use Sujin\Wordpress\Plugin\Korean_Spell_Checker\Gutenberg;

class Korean_Spell_Checker {
	private static $instance;

	private $plugin_path;

	public static $debug_mode  = false;
	public static $plugin_name = 'korean-spell-checker';

	function __construct() {
		if ( ! is_admin() ) {
			return false;
		}

		if ( self::$debug_mode ) {
			error_reporting( E_ALL ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.runtime_configuration_error_reporting
			ini_set( 'display_errors', 1 ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.runtime_configuration_ini_set
			add_action( 'admin_notices', array( $this, 'show_debug_mode_notice' ) );
		}

		$this->plugin_path = dirname( __DIR__ );
		Editor::get_instance();
		Gutenberg::get_instance();
	}

	public function show_debug_mode_notice() {
		?>
		<div class="korean-spell-checker notice notice-error">
			<p><span class="dashicons dashicons-warning"></span> Korean Spell Checker is running on the DEBUG MODE!</p>
		</div>
		<?php
	}

	public function get_asset_url() {
		return plugin_dir_url( $this->get_asset_dir() . 'index.php' );
	}

	public function get_asset_dir() {
		return $this->plugin_path . '/assets/';
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

<?php
use Sujin\Wordpress\Plugin\Korean_Spell_Checker;
use Sujin\Wordpress\Plugin\Korean_Spell_Checker\Editor;

class Editor_Test extends WP_UnitTestCase {
	function test_init() {
		$this->set_admin();
		$this->assertTrue( true );
	}

	function test_get_instance() {
		$class_name = get_class( Editor::get_instance() );
		$this->assertEquals( $class_name, 'Sujin\Wordpress\Plugin\Korean_Spell_Checker\Editor' );
	}

	function test_mce_external_plugins() {
		$instance = Editor::get_instance();
		$result   = $instance->mce_external_plugins( array() );
		$result   = false !== strpos( $result[Korean_Spell_Checker::$plugin_name], 'korean-spell-checker/assets/dist/script.js' );

		$this->assertTrue( $result );
	}

	function test_mce_buttons() {
		$instance = Editor::get_instance();
		$result   = $instance->mce_buttons( array() );

		$button_array = array( 'separator', Korean_Spell_Checker::$plugin_name );

		$this->assertEquals( $result, $button_array );
	}

	function set_admin() {
		global $current_screen;
		$user_id        = $this->factory->user->create( array( 'role' => 'administrator' ) );
		$user           = wp_set_current_user( $user_id );
		$screen         = WP_Screen::get( 'admin_init' );
		$current_screen = $screen;
	}
}

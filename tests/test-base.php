<?php
use Sujin\Wordpress\Plugin\Korean_Spell_Checker;

class Korean_Spell_Checker_Test extends WP_UnitTestCase {
	function test_init() {
		$this->set_admin();
		$this->assertTrue( true );
	}

	function test_debug_mode() {
		$this->assertFalse( Korean_Spell_Checker::$debug_mode );
	}

	function test_get_instance() {
		$class_name = get_class( Korean_Spell_Checker::get_instance() );
		$this->assertEquals( $class_name, 'Sujin\Wordpress\Plugin\Korean_Spell_Checker' );
	}

	function test_get_asset_url() {
		$instance = Korean_Spell_Checker::get_instance();
		$result   = $instance->get_asset_url();
		$result   = strpos( $result, 'korean-spell-checker/assets' ) !== false;

		$this->assertTrue( $result );
	}

	function test_get_asset_dir() {
		$instance = Korean_Spell_Checker::get_instance();
		$result   = $instance->get_asset_dir();
		$result   = strpos( $result, 'korean-spell-checker/assets' ) !== false;

		$this->assertTrue( $result );
	}

	function set_admin() {
		global $current_screen;
		$user_id        = $this->factory->user->create( array( 'role' => 'administrator' ) );
		$user           = wp_set_current_user( $user_id );
		$screen         = WP_Screen::get( 'admin_init' );
		$current_screen = $screen;
	}
}

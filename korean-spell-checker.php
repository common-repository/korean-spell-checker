<?php
/**
 * Plugin Name: 한글 맞춤법 검사기 - Korean Spell Checker!
 * Plugin URI: http://www.sujinc.com/
 * Description: 워드프레스 리치 에디터에 한글 맞춤법 검사기로 바로 가는 버튼을 삽입합니다. 이제 쪽팔리게 맞춤법 틀리지 마세요. (저도 못하지만)
 * Version: 4.0
 * Author: Sujin 수진 Choi
 * Author URI: http://www.sujinc.com/
 * License: GPLv2 or later
 * Text Domain: korean-spell-checker
 */

if ( ! defined( 'ABSPATH' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
}

include_once( plugin_dir_path( __FILE__ ) . 'classes/class-base.php' );
include_once( plugin_dir_path( __FILE__ ) . 'classes/class-editor.php' );
include_once( plugin_dir_path( __FILE__ ) . 'classes/class-gutenberg.php' );

Sujin\Wordpress\Plugin\Korean_Spell_Checker::get_instance();

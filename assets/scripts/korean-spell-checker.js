export default function openSpeller(text) {
  jQuery('<form />', {
    id: 'korean_spell_checker',
    target: '_blank',
    action: 'http://speller.cs.pusan.ac.kr/results',
    method: 'post',
    html: '<textarea name="text1"></textarea>',
  }).appendTo('body');

  jQuery('form#korean_spell_checker textarea').html(text);
  jQuery('form#korean_spell_checker').submit();
  jQuery('form#korean_spell_checker').remove();
}

jQuery(document).ready(() => {
  window.tinymce.create('tinymce.plugins.koreanSpellChecker', {
    init: (editor) => {
      editor.addCommand('open_korean_spell_checker', () => {
        const text = editor.getContent({ format: 'text' });
        openSpeller(text);
      });

      // Register buttons
      editor.addButton('korean-spell-checker', {
        title: '한국어 맞춤법 검사기를 열어요.',
        cmd: 'open_korean_spell_checker',
      });
    },
    getInfo: () => ({
      longname: 'Korean Spell Checker',
      author: 'sujin',
      authorurl: 'http://www.sujinc.com',
      infourl: '',
      version: '1.0',
    }),
  });

  // Register plugin
  window.tinymce.PluginManager.add(
    'korean-spell-checker',
    window.tinymce.plugins.koreanSpellChecker,
  );
});

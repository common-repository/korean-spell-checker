import openSpeller from './korean-spell-checker';
import getIcon from './icon';

((wp) => {
  const { withSelect } = wp.data;
  const { ifCondition, compose } = wp.compose;
  const { createElement } = wp.element;

  const Component = props => (
    createElement(
      wp.editor.RichTextToolbarButton, {
        icon: getIcon(),
        title: '한글 맞춤법 검사기',
        onClick: () => {
          openSpeller(props.selectedBlock.attributes.content);
        },
      },
    )
  );

  const Container = compose(
    withSelect(select => ({
      selectedBlock: select('core/editor').getSelectedBlock(),
    })),
    ifCondition(props => props.selectedBlock && props.selectedBlock.name === 'core/paragraph'),
  )(Component);

  wp.richText.registerFormatType(
    'korean-spell-checer/check-spell', {
      title: '한글 맞춤법 검사기',
      tagName: 'check-spell',
      className: null,
      edit: Container,
    },
  );
})(window.wp);

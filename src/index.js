window.onload = function () {
  console.log('Work!');

  //Tags
  addTagsClickHandler();
}

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      let clickTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickTag);
      if (clickTag.innerText === 'All') {
        showAllStrategies();
      } else {
        filterStrategyBySelectedTag(clickTag.innerText);
      }
    }
  })
}

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.strategies__tags .tag');
  tags.forEach(tag => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  })
}

const selectClickedTag = (clickTag) => {
  clickTag.classList.remove('tag_bordered');
  clickTag.classList.add('tag_selected');
}

const showAllStrategies = () => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.remove('strategy_hidden');
  })
}

const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
  strategies.forEach(strategy => {
    strategy.classList.add('strategy_hidden');
    strategy.querySelectorAll('.tag').forEach(tag => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove('strategy_hidden');
      }
    })
  })
};
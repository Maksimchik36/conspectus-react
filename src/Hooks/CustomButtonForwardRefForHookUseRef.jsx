// При использовани рефов на компоненте, проп ref не передается автоматически. Это создает проблемы в случае когда мы хотим получить ref на элемент внутри самого компонента, а не на сам компонент. Функция forwardRef автоматически передает пропсы, полученные родительским компонентом его дочерним элементам.

import { forwardRef } from "react";


const CustomButtonForwardRefForHookUseRef = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));


export default CustomButtonForwardRefForHookUseRef;
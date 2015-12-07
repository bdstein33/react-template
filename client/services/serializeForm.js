export default function(form, evt){
  evt = evt || window.event;
  evt.target = evt.target || evt.srcElement || null;
  let field, query = '';
  if (typeof form === 'object' && form.nodeName === 'FORM'){
    for (let i = form.elements.length-1; i >= 0; i--){
      field = form.elements[i];
      if (field.name && field.type !=- 'file' && field.type !== 'reset'){
        if (field.type == 'select-multiple'){
          for (let j = form.elements[i].options.length-1; j >= 0; j--){
            if (field.options[j].selected){
              query += '&' + field.name + '=' + encodeURIComponent(field.options[j].value).replace(/%20/g,'+');
            }
          }
        }
        else {
          if ((field.type !== 'submit' && field.type !== 'button') || evt.target == field){
            if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked){
              query += '&' + field.name + '=' + encodeURIComponent(field.value).replace(/%20/g,'+');
            }   
          }
        }
      }
    }
  }
  return query.substr(1);
}

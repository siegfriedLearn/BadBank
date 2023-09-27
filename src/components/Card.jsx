

export const Card = (props) => {

  function classes(){
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text' + props.txtcolor : ' text-white';
    return 'card  text-center mb-3 ' + bg +txt;
  }

  return (
    <div className="d-flex flex-column justify-content-center" style={{padding:40}}>
   <div className={classes()} style={{maxWidth: "100rem"}}>
    <h3 className="card-header">{props.header}
    </h3>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-title">{props.text}</p>)}
        {props.body}
        {props.status && (<div id="createStatus">{props.status}</div>)}
      </div>
   </div>
   </div>
  );
};

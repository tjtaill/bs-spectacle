[@bs.module "spectacle"] external reactClass : ReasonReact.reactClass = "Slide";

[@bs.obj]
external makeProps :
  (
    ~align: string=?,
    ~controlColor: string=?,
    ~goTo: int=?,
    ~id: string=?,
    ~maxHeight: int=?,
    ~maxWidth: int=?,
    ~notes: string=?,
    ~onActive: int => unit=?,
    ~progressColor: string=?,
    ~transition: array(Types.transition)=?,
    ~transitionIn: array(Types.transition)=?,
    ~transitionOut: array(Types.transition)=?,
    ~transitionDuration: int=?,
    ~getAppearStep: int => unit=?,
    unit
  ) =>
  _ =
  "";

let make =
    (
      ~italic=?,
      ~bold=?,
      ~caps=?,
      ~margin=?,
      ~padding=?,
      ~textColor=?,
      ~textSize=?,
      ~textAlign=?,
      ~textFont=?,
      ~bgColor=?,
      ~bgImage=?,
      ~bgSize=?,
      ~bgPosition=?,
      ~bgRepeat=?,
      ~bgDarken=?,
      ~overflow=?,
      ~height=?,
      /* Slide specific props */
      ~align=?,
      ~controlColor=?,
      ~goTo=?,
      ~id=?,
      ~maxHeight=?,
      ~maxWidth=?,
      ~notes=?,
      ~onActive=?,
      ~progressColor=?,
      ~transition=?,
      ~transitionIn=?,
      ~transitionOut=?,
      ~transitionDuration=?,
      ~getAppearStep=?,
      children
    ) =>
  ReasonReact.wrapJsForReason(
    ~reactClass,
    ~props=
      BaseProps.extendProps(
        makeProps(
          ~align?,
          ~controlColor?,
          ~goTo?,
          ~id?,
          ~maxHeight?,
          ~maxWidth?,
          ~notes?,
          ~onActive?,
          ~progressColor?,
          ~transition=?Types.mapTransitionsToJs(transition),
          ~transitionIn=?Types.mapTransitionsToJs(transitionIn),
          ~transitionOut=?Types.mapTransitionsToJs(transitionOut),
          ~transitionDuration?,
          ~getAppearStep?,
          ()
        ),
        ~italic?,
        ~bold?,
        ~caps?,
        ~margin?,
        ~padding?,
        ~textColor?,
        ~textSize?,
        ~textAlign?,
        ~textFont?,
        ~bgColor?,
        ~bgImage?,
        ~bgSize?,
        ~bgPosition?,
        ~bgRepeat?,
        ~bgDarken?,
        ~overflow?,
        ~height?
      ),
    children
  );
module SceneProtos.Game.Components.Ship.Model exposing (component)

{-| Component model

@docs component

-}

import Color
import Lib.Base exposing (SceneMsg)
import Lib.UserData exposing (UserData)
import Messenger.Base exposing (UserEvent(..))
import Messenger.Component.Component exposing (ComponentInit, ComponentMatcher, ComponentStorage, ComponentUpdate, ComponentUpdateRec, ComponentView, ConcreteUserComponent, genComponent)
import Messenger.GeneralModel exposing (Msg(..), MsgBase(..))
import Messenger.Misc.KeyCode exposing (arrowDown, arrowUp)
import Messenger.Render.Sprite exposing (renderSprite)
import SceneProtos.Game.Components.Bullet.Init exposing (CreateInitData)
import SceneProtos.Game.Components.ComponentBase exposing (BaseData, ComponentMsg(..), ComponentTarget(..), emptyBaseData)
import SceneProtos.Game.SceneBase exposing (SceneCommonData)


type alias Data =
    { interval : Int
    , timer : Int
    }


init : ComponentInit SceneCommonData UserData ComponentMsg Data BaseData
init _ initMsg =
    case initMsg of
        ShipInitMsg msg ->
            ( { interval = msg.bulletInterval, timer = 15 }
            , { id = msg.id
              , position = msg.position
              , velocity = 0
              , alive = True
              , collisionBox = ( 150, 50 )
              , ty = "Ship"
              }
            )

        _ ->
            ( { interval = 0, timer = 15 }, emptyBaseData )


update e n d b =
    let
        moveShip pos vel =
            let
                ( x, y ) =
                    pos
            in
            ( x, y + vel )
    in
    if b.alive then
        let
            v =
                1 / 4

            vModify =
                max (3 / 2) (toFloat e.commonData.score * 1 / 60)
        in
        case n of
            Tick dt ->
                if d.timer == d.interval then
                    ( ( { d | timer = 0 }, b ), [ Parent (OtherMsg (NewBulletMsg (CreateInitData 1 ( Tuple.first b.position + 170, Tuple.second b.position + 20 ) Color.blue))) ], ( e, False ) )

                else
                    ( ( { d | timer = d.timer + dt }, b ), [], ( e, False ) )

            KeyDown key ->
                case key of
                    40 ->
                        ( ( d, { b | velocity = v + vModify } ), [], ( e, False ) )

                    38 ->
                        ( ( d, { b | velocity = -v - vModify } ), [], ( e, False ) )

                    _ ->
                        ( ( d, b ), [], ( e, False ) )

            KeyUp key ->
                case key of
                    40 ->
                        ( ( d, { b | velocity = 0 } ), [], ( e, False ) )

                    38 ->
                        ( ( d, { b | velocity = 0 } ), [], ( e, False ) )

                    _ ->
                        ( ( d, b ), [], ( e, False ) )

            _ ->
                ( ( d, b ), [], ( e, False ) )

    else
        ( ( d, b ), [], ( e, False ) )


updaterec : ComponentUpdateRec SceneCommonData Data UserData SceneMsg ComponentTarget ComponentMsg BaseData
updaterec env msg data basedata =
    case msg of
        CollisionMsg _ ->
            ( ( data, basedata ), [], env )

        _ ->
            ( ( data, basedata ), [], env )


view : ComponentView SceneCommonData UserData Data BaseData
view { globalData } _ basedata =
    ( renderSprite globalData.internalData [] basedata.position basedata.collisionBox "ship", 0 )


matcher : ComponentMatcher Data BaseData ComponentTarget
matcher _ basedata tar =
    tar == Type basedata.ty || tar == Id basedata.id


componentcon : ConcreteUserComponent Data SceneCommonData UserData ComponentTarget ComponentMsg BaseData SceneMsg
componentcon =
    { init = init
    , update = update
    , updaterec = updaterec
    , view = view
    , matcher = matcher
    }


{-| Component generator
-}
component : ComponentStorage SceneCommonData UserData ComponentTarget ComponentMsg BaseData SceneMsg
component =
    genComponent componentcon

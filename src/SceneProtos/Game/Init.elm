module SceneProtos.Game.Init exposing (InitData)

{-|


# Init module

@docs InitData

-}

import Lib.UserData exposing (UserData)
import Messenger.Component.Component exposing (LevelComponentStorage)
import SceneProtos.Game.Components.ComponentBase exposing (BaseData, ComponentMsg, ComponentTarget)
import SceneProtos.Game.SceneBase exposing (SceneCommonData)


{-| The data used to initialize the scene
-}
type alias InitData scenemsg =
    { objects : List (LevelComponentStorage SceneCommonData UserData ComponentTarget ComponentMsg BaseData scenemsg)
    , level : String
    }

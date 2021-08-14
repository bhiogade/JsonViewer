from django.urls import path
from .views import current_user, UserList
from .uploadjson import JsonClass

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('json/', JsonClass.as_view())

]

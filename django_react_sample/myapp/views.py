from django.shortcuts import render
import requests
import json
from django.conf import settings
from .models import Comment
from django.utils.safestring import mark_safe


def render_to_react_string(component_name, ctx=None):
    if ctx is None:
        ctx = {}
    response = requests.get(settings.NODE_SERVER,
                            params={'component_name': component_name, 'data': json.dumps(ctx)})
    return mark_safe(response.text)


def index(request):
    react_ctx_comment = {'id': 1, 'name': 'Ustun', 'text': 'A sample comment'};
    rendered_comment = render_to_react_string('Comment', react_ctx_comment)

    react_ctx_comments = {'comments': [{'id': 1, 'name': 'Ustun', 'text': 'A sample comment'},
                                       {'id': 2, 'name': 'John', 'text': 'Another comment'},
                                       {'id': 3, 'name': 'Mary', 'text': 'Yet another comment'}]}

    rendered_comments = render_to_react_string('Comments', react_ctx_comments)

    rendered_hello_world = render_to_react_string('HelloWorld')

    ctx = {'rendered_comment': rendered_comment,
           'react_ctx_comment': react_ctx_comment,
           'rendered_comments': rendered_comments,
           'react_ctx_comments': react_ctx_comments,
           'rendered_hello_world': rendered_hello_world}

    return render(request, 'index.html', ctx)

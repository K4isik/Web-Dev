# from django.shortcuts import render
# # from django.http import HttpResponse



# def about(request):
#     return render(request, 'api/about.html')

from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Product, Category

def index(request):
    return render(request, 'api/index.html')

def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        data = {'product': {
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.name
        }}
    except Product.DoesNotExist:
        data = {'error': 'Product not found'}
    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        data = {'category': {
            'name': category.name,
        }}
    except Category.DoesNotExist:
        data = {'error': 'Category not found'}
    return JsonResponse(data)

def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.product_set.all()
        data = {'products': list(products.values())}
    except Category.DoesNotExist:
        data = {'error': 'Category not found'}
    return JsonResponse(data)
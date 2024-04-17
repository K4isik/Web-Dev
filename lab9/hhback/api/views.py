from django.http import JsonResponse
from django.shortcuts import render
from .models import Company, Vacancy

# companies
def company_list(request):
    companies = Company.objects.all()
    data = []
    for company in companies:
        company_data = {
            'id':company.id,
            'name':company.name,
            'description':company.description,
            'city':company.city,
            'address':company.address
        }
        data.append(company_data)
    return JsonResponse(data, safe=False)

# companies/id
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
        data = {
            'id': company.id, 
            'name': company.name, 
            'description': company.description, 
            'city': company.city, 
            'address': company.address}
        return JsonResponse(data)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

# companies/id/vacancies
def company_vacancy_list(request, id):
    vacancies = Vacancy.objects.filter(company=id)
    data = []
    for vacancy in vacancies:
        vacancy_data = {
        'id': vacancy.id, 
        'name': vacancy.name, 
        'description': vacancy.description, 
        'salary': vacancy.salary,
        'company':vacancy.company.name
        }
        data.append(vacancy_data)
    return JsonResponse(data, safe=False)

# vacancies
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = []
    for vacancy in vacancies:
        vacancy_data = {
        'id': vacancy.id, 
        'name': vacancy.name, 
        'description': vacancy.description, 
        'salary': vacancy.salary,
        'company':vacancy.company.name
        }
        data.append(vacancy_data)
    return JsonResponse(data, safe=False)

# (vacancies/id)
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        data = {
            'id': vacancy.id, 
            'name': vacancy.name, 
            'description': vacancy.description, 
            'salary': vacancy.salary, 
            'company':vacancy.company.name
            }
        return JsonResponse(data)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    last_vacancy = vacancies.pop()
    vacancies.insert(0, last_vacancy)
    data = []
    for vacancy in vacancies:
        vacancy_data = {
        'id': vacancy.id, 
        'name': vacancy.name, 
        'description': vacancy.description, 
        'salary': vacancy.salary,
        'company':vacancy.company.name
        }
        data.append(vacancy_data)
    return JsonResponse(data, safe=False)


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = []
    for vacancy in vacancies:
        vacancy_data = {
        'id': vacancy.id,
        'name': vacancy.name,
        'description': vacancy.description,
        'salary': vacancy.salary,
        'company':vacancy.company.name
        }
        data.append(vacancy_data)
    # data.reverse()
    # if data:
    #     last_element = data.pop()
    #     data.insert(0, last_element)

    return JsonResponse(data, safe=False)
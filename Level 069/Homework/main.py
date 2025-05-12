def domain_name(url):
    if "http://" in url:
        url = url[7:] 
    elif "https://" in url:
        url = url[8:]  
    

    if url[:4] == "www.":
        url = url[4:]  

        
    if '/' in url:
        url = url.split('/')[0] 


    domain = ""
    for char in url:
        if char == '.':
            break
        domain += char

    return domain

export class ProductService {

    constructor(){
        console.log('ProductService constructor');
    }

    static GetFetchRequest(){
        let headers = new Headers({
            'Content-Type' : 'application/x-www-form-urlencoded', //'application/json',
            'Accept': 'application/json',
        });
        
        let url = 'http://hadassh/ustore/api/ProductList/GetProductGroups';
        let params = 'storeid=5&userid=3&cultureid=1'
        url = `${url}?${params}`;

        let fetchInit = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            credentials: 'include'
        };

        let request = new Request(url, fetchInit);

        return request;
    }

    static GetMockFromWebAPI(){
        let returnObj;

        let productList = [
            {"id":1,"name":"XM Pressocup","description":"","thumbnailURL":"/ustore/Controls/ImageProxy.ashx?qs=/udiXhBNDCM6ggtz1bMajuVhdhWAm1EyhtttNMmwuvVR6x74ixdkNs498IPd0Omdsw9JeaXm1Aa1H2Ffjg4j1q+jYJVPGwt3qLSepmMGIOKg+YLOv+bbK/XHcLLE4O5e6j3ZU+RrIHT0nkyfbxq18RYeBIq2Al+BsQBhQfATluTAYbHvO3bMkksG7K6+nZPF1/8Xe+T/4PZZQbYsCh3gVg=="},
            {"id":9,"name":"static1","description":"","thumbnailURL":"/ustore/Controls/ImageProxy.ashx?qs=KQ1ciUQtGCU0CgC9PkEgYtoVhwPFwxZKXUttdxJXJbJCR6O/TYJ1ESBIYi8Rwps248OOHZEoW4OFp13tQcqT1xaU2x2Y9VlPwQb1KqqMbDnVArPnf805GsL2pvXnx9MQt6qpjtDAYSRpcNYYWauyA/BxoZYraI2DZ908A5dwd89Rz5z+EZPdlCdDkeGXsUHRyiBtlnCqoTqLaA8SyfL978UNzXhHbxY6zAkTLDdc0ns2smcN9ZYK7IsqzhvRkvDR"},
            {"id":11,"name":"static2","description":"","thumbnailURL":"/ustore/Controls/ImageProxy.ashx?qs=nHNS848TDIKtDkL/aQE9uQ4+M4Z8hBNgUqgQUXCDK2fUjuT5od/TDfg6AMP/jX5sRUvEzcALliipKnL8907gQ7aF2FrLuxIatzZAgo18ytauvVPhceGEsOy2x8wsvQNVA1TuwNBfimhijzu60A1LtlHyT91d54TTgaMwtZwL6QgOGcCjSTX/yKiQUpdYJFeOpf73LIaKwj0YyarYHEtS4ZjIODw+gw0HLHQDkpFCR093t7ZjAAs4kwuJRhbteMk8"},
            {"id":12,"name":"XM Pressocup all regular pricing","description":"","thumbnailURL":"/ustore/Controls/ImageProxy.ashx?qs=uO/9X1tfiYFjuWyWEX9X/ZzCst8LdMiNJuwOcmnCdhMMkTDJsLVhRlp3aop3jOioGZjJ+xf+KcRPV/T+n4rFBvjpx1B3k1Ok781zquZeDIW3l6f5USOz6EbmuVh8HMFzLuitqdfYYatmED7rp4L/aUzirDhIK3NyybARs09Q8FIVp3u3f2Scxm9YR9KjUsYvjHKMVVGoRADBLoa/jUI+Ig=="},
            {"id":30,"name":"XM Pressocup - xm regular pricing child mixed","description":"","thumbnailURL":"/ustore/Controls/ImageProxy.ashx?qs=f8qPrEdwv87LSvQkMDt6RjmS7Zx6KSZ2N/+7bdsiRBIPb4uRX4U1Do+BtV72R28pnmF5gz1T2hk6UzcTy4+uZKW1AskMgp0+zLJKqL3sxO5xqamRkECT2kAXPUaJfhtlaa5O8lRdFc+shT/9YlAb7fOr+Km3MnROnO7ez01UkErHzxrxK9TRge/9aiWHDBmvZV5LN6LaKWxNwMWF3SnwJg=="},
            {"id":18,"name":"XM Pressocup - xm excel child reg","description":"","thumbnailURL":"/ustore/Controls/ImageProxy.ashx?qs=RRp4QGFyQPef2UMHFkYQQ+vYqyK1VbSb1RPjCpU260djlIHpFzz+rbUx+UYm76CVzDx+YR7XYKdz09+h6cwMBCrwFumSLwKmwop8CllgJXQC7z1vnpwtPG2FcLJ0cIdWwwsSNmwTA6fjweKDURpUUubbnvDJVhWKWKMJ0isK51yjYLnBrsAitMqbkWOPfXck7Komke7Ll2RvKH2ZLNzxlA=="},
            {"id":24,"name":"XM Pressocup all excel pricing","description":"","thumbnailURL":"/ustore/Controls/ImageProxy.ashx?qs=CWoi5DA96dIIMlkDGSZyl24wwKi5jGjWNJBljZBvdSIzI1IFdhhlM3eDNCSwDtEw6jazlX1xRUK//Jv6GsVNiSMncLW5WICKIraTCzfFGq1uL309EYij+d+i3k1+fJt7JAFEtMkweD5cDN20UT7/e91tgA1Uhmc3ees8rNIR6/GejhwkLuCsiKI+ARKAY1wFZFdHdmiX/6wO1PR31Birdg=="},
            {"id":36,"name":"Dynamic","description":"","thumbnailURL":"/ustore/Controls/ImageProxy.ashx?qs=OyrrwQOLxG6tYgVyDesZqQvBQ6mXnFGajlgQpkgWAljLemFUzY4Cv6fF3XCc6gt2noge+eey9R1Y5+KHIt7fXBffDEINpNMtMHffpp43+QPHhlvqQnxoEapW1uUvRcbMfa/bm5K+1UZ0bHOope5eLG7qglwNZ2Q4FjQa7HLj7TVCTO2fgrGKJ5Sj+zpadY8fjmzISOtA5r/OFZ+wxFvuAQ=="}
        ];

        returnObj = [
            {
            "id":5,
            "name":"Group1",
            "description":"This is the best product group ever!",
            "productList": productList
            }
        ];

        return returnObj;
    }

    static getProduct(productID, productGroupList){
        for (let i=0; i<productGroupList.length; i++){
            let product = productGroupList[i].productList.find(p => p.id === parseInt(productID,10));
            if (product !== undefined){
                return product;
            }
        };
        
        return null;
    }

    static getGroupByProductID(productID, productGroupList){
        for (let i=0; i<productGroupList.length; i++){
            let product = productGroupList[i].productList.find(p => p.id === parseInt(productID,10));
            if (product !== undefined){
                return productGroupList[i];
            }
        };
        
        return null;
    }

    static getGroup(groupID, productGroupList){
        let groupToReturn = productGroupList.find(g => g.id === parseInt(groupID,10));
        
        return groupToReturn;
    }

    GetMock(){
        let productList1 = [
          {id: 1, name: "Static", description: "Static description", thumbnailURL: "../assets/static thumbnail.PNG"},
          {id: 2, name: "Dynamic", description: "Dynamic description", thumbnailURL: "../assets/dynamic thumbnail.PNG"},
          {id: 3, name: "Static2", description: "Static2 description", thumbnailURL: "../assets/static thumbnail.PNG"},
          {id: 4, name: "Dynamic2", description: "Dynamic2 description", thumbnailURL: "../assets/dynamic thumbnail.PNG"}
        ];
        let productList2 = [
          {id: 5, name: "Composite", description: "Composite description", thumbnailURL: "../assets/composite thumbnail.jpg"},
          {id: 6, name: "XM campaign", description: "XM campaign description", thumbnailURL: "../assets/xm campaign thumbnail.png"},
          {id: 7, name: "XM campaign2", description: "XM campaign2 description", thumbnailURL: "../assets/xm campaign thumbnail.png"}
        ];
        
        let productGroupList = [
          {id: 1, name: "Business cards", description:"Find here business cards products", productList: productList1},
          {id: 2, name: "Other products", description:"Find here other products", productList: productList2}
        ];
    
        return productGroupList;
    }
}



export default ProductService;
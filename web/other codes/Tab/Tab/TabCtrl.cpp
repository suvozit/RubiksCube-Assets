// IbTabCtrl.cpp : implementation file
//

#include "stdafx.h"
#include "tab.h"
#include "IbTabCtrl.h"

// CIbTabCtrl

IMPLEMENT_DYNAMIC(CIbTabCtrl, CTabCtrl)
CIbTabCtrl::CIbTabCtrl()
{
	m_iPrevPage = 0;
}

CIbTabCtrl::~CIbTabCtrl()
{
}


BEGIN_MESSAGE_MAP(CIbTabCtrl, CTabCtrl)
	ON_NOTIFY_REFLECT(TCN_SELCHANGE, OnTcnSelchange)
	ON_WM_SHOWWINDOW()
END_MESSAGE_MAP()

// CIbTabCtrl message handlers
void CIbTabCtrl::addNewPage(CString strPage, CWnd * pPage)
{
	this->InsertItem(this->GetItemCount(),strPage);  
	pPage->ShowWindow(SW_HIDE); 
	m_oPages.Add(pPage); 
}

void CIbTabCtrl::OnTcnSelchange(NMHDR *pNMHDR, LRESULT *pResult)
{
	// TODO: Add your control notification handler code here
	CWnd * pPage;
	int iCurrent;
	iCurrent = this->GetCurFocus();
	pPage = m_oPages.GetAt(iCurrent);
	setPage(pPage);
	m_iPrevPage = iCurrent;
}

void CIbTabCtrl::setPage(CWnd* pWnd)
{
	m_oPages.GetAt(m_iPrevPage)->ShowWindow(SW_HIDE);

	CRect tabRect, itemRect;
	int nX, nY, nXc, nYc;

	GetClientRect(&tabRect);
	GetItemRect(0, &itemRect);

	nX=itemRect.left;
	nY=itemRect.bottom+1;
	nXc=tabRect.right-itemRect.left-1;
	nYc=tabRect.bottom-nY-1;
	pWnd->SetWindowPos(&wndTop, nX, nY, nXc, nYc, SWP_SHOWWINDOW);
}

void CIbTabCtrl::setDefaultPage(int iIndex)
{
	CWnd * pPage;
	m_iPrevPage = iIndex;
	if(iIndex >=0 && iIndex < m_oPages.GetCount())
	{
		pPage = m_oPages.GetAt(iIndex);
		setPage(pPage);		
	}
}

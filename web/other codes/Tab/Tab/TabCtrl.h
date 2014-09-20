#pragma once

// CIbTabCtrl

class CIbTabCtrl : public CTabCtrl
{
	DECLARE_DYNAMIC(CIbTabCtrl)

private: 
	CArray<CWnd*,CWnd*> m_oPages;
	void setPage(CWnd* pWnd);
	int  m_iPrevPage;
public:
	CIbTabCtrl();
	virtual ~CIbTabCtrl();

protected:
	DECLARE_MESSAGE_MAP()
public:
	void addNewPage(CString strPage, CWnd * pPage);
	void setDefaultPage(int iIndex = 0);

	afx_msg void OnTcnSelchange(NMHDR *pNMHDR, LRESULT *pResult);
};



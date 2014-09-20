// Cubie.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include "CubePosition.h"
#include "SolverKociemba.h"

int _tmain(int argc, _TCHAR* argv[])
{
	SolverKociemba solverK;
	CubePosition cubePos;

	solverK.run();

	//cubePos.doMove(2,1,false);

	//for(int a = 0; a < 10; a++)
	{
		solverK.mix(&cubePos);
		if(solverK.setPosition(cubePos, false)) solverK.run();

		MoveSequence generator = solverK.getGenerator();
		std::string moves = generator.toString(true);

		printf("%d ", generator.getLength());
		for(int i = 0; i < moves.length(); i++) printf("%c", moves[i]);
		printf("\n");

		for(int i = generator.getLength() - 1; i >=0 ; i--)	
			cubePos.doMove(generator.getMoves()[i],4-generator.getAmount()[i],true);
	}

	return 0;
}

//_ F Ls2 Fs2 Ls2 B2 (8,15q,5s)
//_ B2 Ls2 Fs2 Ls2 F'


